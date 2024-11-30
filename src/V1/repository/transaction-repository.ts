import { Prisma, Transaction } from "@prisma/client";
import prisma from "../libs/prisma";
import { TransactionDTO } from "./../DTO/transaction-DTO";

class TransactionRepository {
  async post(transactionDTO: TransactionDTO[]): Promise<Prisma.BatchPayload> {
    const transaction: Prisma.BatchPayload = await prisma.transaction.createMany({
      data: transactionDTO,
    });
    return transaction;
  }
  async getAll(): Promise<Transaction[]> {
    const transaction: Transaction[] = await prisma.transaction.findMany();
    return transaction;
  }
}

export default new TransactionRepository();
