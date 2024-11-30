import { Prisma, Transaction } from "@prisma/client";
import { TransactionDTO } from "../DTO/transaction-DTO";
import transactionRepository from "../repository/transaction-repository";

class TransactionService {
  async post(transactionDTO: TransactionDTO[]): Promise<Prisma.BatchPayload> {
    const transaction = transactionRepository.post(transactionDTO);
    return transaction;
  }

  async getAll(): Promise<Transaction[]> {
    const transaction = transactionRepository.getAll();
    return transaction;
  }
}

export default new TransactionService();
