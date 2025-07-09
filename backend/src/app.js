import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {createServer} from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

const port = process.env.PORT || 8000;
app.set("port", port)

app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true, limit: "40kb"}));
app.use("/api/v1/users", userRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to HSMeet backend!");
});

app.get("/home", (req, res) => {
    res.send("Hii, This is Himanshu Singh.");
})

const start = async () => {
    try {
      app.set("mongo_user")
      const connectionDB = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Mongoose connected DB Host: ${connectionDB.connection.host}`);

      console.log("before server listen")
    server.listen(port, () => {
        console.log(`Listening on port ${port}.`);
    })
    console.log("after server listen")
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with failure
    }
    
}

start();