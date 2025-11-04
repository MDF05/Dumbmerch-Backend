import { Server, Socket } from "socket.io";
import prisma from "../libs/prisma";

interface ChatDTO {
  roomId: string;
  senderId: number;
  receiverId: number;
  message?: string;
}

export const socketHandler = (socket: Socket, io: Server) => {
  console.log(`⚡ User connected: ${socket.id}`);

  // ===== JOIN ROOM =====
  socket.on(
    "join_room",
    async (data: { senderId: number; receiverId: number }) => {
      const { senderId, receiverId } = data;
      const roomId = generateRoomId(senderId, receiverId);
      socket.join(roomId);
      console.log(`🟢 ${senderId} joined room ${roomId}`);

      const chats = await prisma.chats.findMany({
        where: { roomId },
        orderBy: { createdAt: "asc" },
      });

      socket.emit("load_history", chats);
    }
  );

  // ===== USER REQUEST ADMIN LIST =====
  socket.on("get_admin_list", async () => {
    const admins = await prisma.user.findMany({
      where: { role: "ADMIN" },
      include: { profile: true },
    });
    socket.emit("admin_list", admins);
  });

  // ===== ADMIN REQUEST USER LIST =====
  socket.on("get_user_list", async () => {
    const users = await prisma.user.findMany({
      where: { role: "USER" },
      include: { profile: true },
    });
    socket.emit("user_list", users);
  });

  // ===== KIRIM PESAN =====
  socket.on("send_message", async (data: ChatDTO) => {
    const { roomId, senderId, receiverId, message } = data;

    const saved = await prisma.chats.create({
      data: { roomId, senderId, receiverId, message: message ?? "" },
    });

    io.to(roomId).emit("new_message", saved);
  });

  socket.on("disconnect", () => {
    console.log(`🔴 User disconnected: ${socket.id}`);
  });
};

function generateRoomId(a: number, b: number) {
  return [a, b].sort((x, y) => x - y).join("-");
}
