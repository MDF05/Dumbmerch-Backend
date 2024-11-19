import { Router } from "express";
import paymentController from "../controller/payment-controller";

const paymentRouter = Router();

paymentRouter.post("/payment", paymentController.post);

export default paymentRouter;
