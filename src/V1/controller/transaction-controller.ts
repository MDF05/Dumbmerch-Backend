import { NextFunction, Request, Response } from "express";
import createError from "../utils/create-error";
import successResponse from "../utils/success-response";
import transactionService from "../service/transaction-service";
import { TransactionDTO } from "../DTO/transaction-DTO";
import { Prisma, Transaction } from "@prisma/client";

class TransactionController {
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const body: TransactionDTO[] = req.body;

      const transaction: Prisma.BatchPayload = await transactionService.post(body);

      res.status(200).json(successResponse("succesfully create transaction", transaction));
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("An error occurred", 500));
    }
  }
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const transaction: Transaction[] = await transactionService.getAll();

      res.status(200).json(successResponse("succesfully create transaction", { transaction }));
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("An error occurred", 500));
    }
  }
}

export default new TransactionController();
