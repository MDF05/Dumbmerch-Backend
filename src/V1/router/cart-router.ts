import { Router } from "express";
import cartController from "../controller/cart-controller";
import authentication from "../middleware/authentication";

const CartRouter = Router();

CartRouter.get("/cart", authentication, cartController.get);
CartRouter.post("/cart/:productId", authentication, cartController.post);

export default CartRouter;
