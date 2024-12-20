import { NextFunction, Request, Response } from "express";
import successResponse from "../utils/success-response";
import createError from "../utils/create-error";
import cartService from "../service/cart-service";
import { Cart } from "@prisma/client";
import { CartDTO } from "../DTO/cart-DTO";

class CartController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = res.locals.user.id;
      const cart: CartDTO = await cartService.getCartByUserId(+userId);

      res.status(200).json(successResponse("get cart successfully", cart, 200));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 402));
      else next(createError("internal server error", 505));
    }
  }
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = res.locals.user.id;
      const productId: string = req.params.productId;

      const cart = await cartService.postCartByUserAndProductId(+userId, +productId);
      res.status(200).json(successResponse("save cart successfully", cart, 200));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 402));
      else next(createError("internal server error", 505));
    }
  }
}

export default new CartController();
