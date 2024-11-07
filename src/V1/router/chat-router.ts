import { Router } from "express";
import authentication from "../middleware/authentication";

const ChatRouter = Router();

// ChatRouter.get("/profile", authentication, chatController.get);

export default ChatRouter;
