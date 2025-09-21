import { Server } from "socket.io"
import { attachPollHandlers } from "./pollSocket.js"

let connections = {}
let messages = {}
let timeOnline = {}

let slideStorage = {}


export const connectToSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["*"],
            credentials: true
        }
    });


    io.on("connection", (socket) => {

        console.log("SOMETHING CONNECTED")

        socket.on("join-call", (path) => {

            if (connections[path] === undefined) {
                connections[path] = []
            }
            connections[path].push(socket.id)

            timeOnline[socket.id] = new Date();

            // connections[path].forEach(elem => {
            //     io.to(elem)
            // })

            for (let a = 0; a < connections[path].length; a++) {
                io.to(connections[path][a]).emit("user-joined", socket.id, connections[path])
            }

            if (messages[path] !== undefined) {
                for (let a = 0; a < messages[path].length; ++a) {
                    io.to(socket.id).emit("chat-message", messages[path][a]['data'],
                        messages[path][a]['sender'], messages[path][a]['socket-id-sender'])
                }
            }

        })

        socket.on("signal", (toId, message) => {
            io.to(toId).emit("signal", socket.id, message);
        })

        socket.on("chat-message", (data, sender) => {

            const [matchingRoom, found] = Object.entries(connections)
                .reduce(([room, isFound], [roomKey, roomValue]) => {


                    if (!isFound && roomValue.includes(socket.id)) {
                        return [roomKey, true];
                    }

                    return [room, isFound];

                }, ['', false]);

            if (found === true) {
                if (messages[matchingRoom] === undefined) {
                    messages[matchingRoom] = []
                }

                messages[matchingRoom].push({ 'sender': sender, "data": data, "socket-id-sender": socket.id })
                console.log("message", matchingRoom, ":", sender, data)

                connections[matchingRoom].forEach((elem) => {
                    if (elem !== socket.id) {
                        io.to(elem).emit("chat-message", data, sender, socket.id);
                    }

                    // io.to(elem).emit("chat-message", data, sender, socket.id)
                })
            }

        })

        socket.on("disconnect", () => {

            var diffTime = Math.abs(timeOnline[socket.id] - new Date())

            var key

            for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {

                for (let a = 0; a < v.length; ++a) {
                    if (v[a] === socket.id) {
                        key = k

                        for (let a = 0; a < connections[key].length; ++a) {
                            io.to(connections[key][a]).emit('user-left', socket.id)
                        }

                        var index = connections[key].indexOf(socket.id)

                        connections[key].splice(index, 1)


                        if (connections[key].length === 0) {
                            delete connections[key]
                        }
                    }
                }

            }


        })

        // Attach poll handlers for this socket
        attachPollHandlers(socket, connections);



        // ===== Add low-bandwidth listeners here =====

        // Low-bandwidth quality updates
        socket.on("quality-update", ({ roomId, userId, mode }) => {
            io.to(roomId).emit("quality-update", { userId, mode });
        });

        // Slide sync (teacher shares compressed slides)
        // socket.on("slides-update", ({ roomId, slides }) => {
        //     io.to(roomId).emit("slides-update", { slides });
        // });

        // socket.on("slides-update", ({ roomId, slides }) => {
        //     console.log(`Broadcasting slides to path ${roomId}`);
        //     if (connections[roomId]) {
        //         connections[roomId].forEach((socketId) => {
        //             io.to(socketId).emit("slides-update", { slides });
        //         });
        //     }
        // })

        // socket.on("slides-update", ({ roomId, slides }) => {
        //     console.log(`Broadcasting slides to roomId: ${roomId}`);
            
        //     // Try both the roomId and the full path
        //     const possiblePaths = [
        //         roomId, // "VDAMPJ"
        //         `http://localhost:5173/classroom/${roomId}`, // Full URL
        //         `/classroom/${roomId}` // Relative path
        //     ];
            
        //     let found = false;
        //     possiblePaths.forEach(path => {
        //         console.log(`Checking connections for path: ${path}`);
        //         console.log(`Connections available:`, Object.keys(connections));
                
        //         if (connections[path]) {
        //             console.log(`Found ${connections[path].length} connections for path: ${path}`);
        //             connections[path].forEach((socketId) => {
        //                 if (socketId !== socket.id) {
        //                     io.to(socketId).emit("slides-update", { slides });
        //                     console.log(`Sent slides to socket: ${socketId}`);
        //                     found = true;
        //                 }
        //             });
        //         }
        //     });
            
        //     if (!found) {
        //         console.log(`No connections found for any path variations of: ${roomId}`);
        //         console.log(`Available connection keys:`, Object.keys(connections));
        //     }
        // });



        // Replace your slides-update handler with this:
        socket.on("slides-update", ({ roomId, slides }) => {
            console.log(`Broadcasting slides to roomId: ${roomId}`);
            
            // Store slides for this room
            slideStorage[roomId] = slides;
            
            // Find the correct path - students join with full path like "/classroom/VDAMPJ"
            const targetPath = `/classroom/${roomId}`;
            
            console.log(`Looking for connections at path: ${targetPath}`);
            console.log(`Available connection keys:`, Object.keys(connections));
            
            if (connections[targetPath] && connections[targetPath].length > 0) {
                console.log(`Found ${connections[targetPath].length} connections for path: ${targetPath}`);
                
                // Broadcast to all students in this room (exclude the sender)
                connections[targetPath].forEach((socketId) => {
                    if (socketId !== socket.id) {
                        io.to(socketId).emit("slides-update", { slides });
                        console.log(`Sent slides to socket: ${socketId}`);
                    }
                });
                
                console.log(`Successfully broadcasted slides to room: ${roomId}`);
            } else {
                console.log(`No connections found for path: ${targetPath}`);
                console.log(`Available paths:`, Object.keys(connections));
            }
        });

        // Add this handler to serve initial slides when students join
        socket.on("getSlides", (roomId, callback) => {
            console.log(`Student requesting slides for room: ${roomId}`);
            
            const currentSlides = slideStorage[roomId] || [];
            console.log(`Sending ${currentSlides.length} slides to student`);
            
            if (callback && typeof callback === 'function') {
                callback(currentSlides);
            }
        });


    })


    return io;
}
