import { Router } from "express";
import transactionController from "../controller/transaction-controller";

const TransactionRouter = Router();

TransactionRouter.post("/transaction", transactionController.post);
TransactionRouter.get("/transaction", transactionController.get);

export default TransactionRouter;
