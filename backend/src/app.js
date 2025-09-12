import express from "express";
import {createServer} from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.routes.js";

import { connectToSocket } from "./controllers/socketManager.js";


import meetingRoutes from "./routes/meetings.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));

app.use(cors());
app.use(express.json({ limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}))

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/meetings", meetingRoutes);


// app.get("/", (req, res) => {
//     return res.send("Hello World!");
// });

const start = async () => {
    const connectionDB = await mongoose.connect("mongodb+srv://shikshasetu100:shikshasetu@shikshasetu.muqfua4.mongodb.net/");
    console.log(`MONGO Connected DB Host : ${connectionDB.connection.host}`)

    server.listen(app.get("port"), "0.0.0.0", () => {
        console.log("Listening on PORT 8000...");
    });
}

start();