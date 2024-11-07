import { Server, Socket } from "socket.io";

const idAdmins: string[] = ["1", "2", "3", "4", "5", "6"];
let socketAdmin: Socket;
const chatUsers: string[] = [];

export const socketHandler = (socket: Socket, io: Server) => {
  const userId = socket.handshake.query.userId;
  const adminId = socket.handshake.query.adminId;

  if (!idAdmins.includes(userId as string)) {
    if (!chatUsers.includes(userId as string)) chatUsers.push(userId as string);
    socket.join(`${userId}-${adminId}`);
    socket.emit("connected", { rooms: [`${userId}${adminId}`] });
    if (socketAdmin) {
      socketAdmin.join(`${userId}-${adminId}`);
    }
  } else {
    socketAdmin = socket;
    const listRooms = chatUsers.map((user) => `${user}-${adminId}`);
    socketAdmin.join(listRooms);
    socketAdmin.emit("connected", { rooms: listRooms });
  }

  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
  });

  socket.on("message", (data: { message: string; roomId: string }) => {
    io.to(data.roomId).emit("data message", { message: data.message, userId });
  });
};
