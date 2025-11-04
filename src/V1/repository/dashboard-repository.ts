import prisma from "../libs/prisma";
import { subDays, startOfWeek, startOfMonth, startOfYear } from "date-fns";

class DashboardRepository {
  async getStats(period: "day" | "week" | "month" | "year") {
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case "day":
        startDate = subDays(now, 1);
        break;
      case "week":
        startDate = startOfWeek(now, { weekStartsOn: 1 });
        break;
      case "month":
        startDate = startOfMonth(now);
        break;
      case "year":
        startDate = startOfYear(now);
        break;
      default:
        startDate = subDays(now, 1);
    }

    const [products, users, carts, transactions] = await Promise.all([
      prisma.product.count({
        where: { createdAt: { gte: startDate } },
      }),
      prisma.user.count({
        where: { createdAt: { gte: startDate } },
      }),
      prisma.cart.count({
        where: { createdAt: { gte: startDate } },
      }),
      prisma.transaction.aggregate({
        _count: true,
        _sum: { gross_amount: true },
        where: { createdAt: { gte: startDate } },
      }),
    ]);

    return {
      products,
      users,
      carts,
      transactionCount: transactions._count,
      totalSales: transactions._sum.gross_amount ?? 0,
    };
  }
}

export default new DashboardRepository();
