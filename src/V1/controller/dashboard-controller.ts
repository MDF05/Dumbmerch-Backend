import { Request, Response, NextFunction } from "express";
import dashboardService from "../service/dashboard-service";
import successResponse from "../utils/success-response";
import createError from "../utils/create-error";

class DashboardController {
  async getStats(req: Request, res: Response, next: NextFunction) {
    try {
      const { period } = req.query as { period?: string };
      const stats = await dashboardService.getStats((period as any) || "month");

      res
        .status(200)
        .json(successResponse("success get dashboard stats", stats));
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("An error occurred", 500));
    }
  }
}

export default new DashboardController();
