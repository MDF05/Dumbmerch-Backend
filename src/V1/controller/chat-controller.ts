import express, { NextFunction, Request, Response, Express } from "express";

class ChatController {
  get() {
    import { createServer } from "http";
    import { Server } from "socket.io";

    const httpServer = createServer();
    const io = new Server(httpServer, {
      // options
    });

    io.on("connection", (socket) => {
      // ...
    });
  }
}
