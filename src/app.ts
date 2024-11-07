import express, { NextFunction, Request, Response, Express } from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import errorResponse from "./V1/utils/error-response";
import V1Router from "./version/V1";
import createError from "./V1/utils/create-error";
import { socketHandler } from "./V1/socket/socket";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("./src/image"));

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  },
});

io.on("connection", (socket) => {
  socketHandler(socket, io);
});

app.use("/api/v1/", V1Router);

app.use("/", (req: Request, res: Response, next: NextFunction) => next(createError("PAGE NOT FOUND", 404)));
app.use(errorResponse);

server.listen(port, async () => {
  console.log("berhasil connect ke database");
  console.log(`listening on port ${port}`);
});
