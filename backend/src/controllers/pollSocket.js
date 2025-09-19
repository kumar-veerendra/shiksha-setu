// pollSocket.js
let polls = {}; // in-memory storage

export const attachPollHandlers = (socket) => {

    // Join the socket to its "room" on connection
    socket.on("join-call", (path) => {
        socket.join(path); // each meeting URL is a room
    });

    // Teacher creates a poll
    socket.on("create-poll", ({ path, ...pollData }) => {
            console.log("Server received poll for path:", path, pollData);

        // Store poll in memory
        polls[path] = { pollData, votes: {} };

        // Broadcast poll to all in the room (including teacher)
        socket.to(path).emit("poll-created", pollData); // others
        socket.emit("poll-created", pollData);          // teacher
    });

    
    // Student votes
    socket.on("vote-poll", ({ path, userId, optionIndex, username }) => {
        const poll = polls[path];
        if (!poll || poll.votes[userId] !== undefined) return;

        poll.votes[userId] = { optionIndex, username };

        // Send vote update to everyone in the room
        socket.to(path).emit("poll-vote", { userId, optionIndex, username });
        socket.emit("poll-vote", { userId, optionIndex, username }); // optional for teacher
    });

    // Teacher ends the poll
    socket.on("end-poll", (path) => {
        const pollId = polls[path]?.pollData.id;
        if (pollId) {
            socket.to(path).emit("poll-ended", pollId); // students
            socket.emit("poll-ended", pollId);          // teacher
        }

        delete polls[path];
    });
};
