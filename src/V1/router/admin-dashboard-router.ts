import { Router } from "express";
import dashboardController from "../controller/dashboard-controller";

const router = Router();

router.get("/api/admin/dashboard", dashboardController.getStats);

export default router;
