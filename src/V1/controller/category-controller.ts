import { NextFunction, Request, Response } from "express";
import createError from "../utils/create-error";
import { CategoryDTO } from "../DTO/category-DTO";
import successResponse from "../utils/success-response";
import categoryService from "../service/category-service";

class CategoryController {
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const body: CategoryDTO = req.body;

      const category = await categoryService.post(body);

      res.status(200).json(successResponse("create category successfully", category, 200));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 402));
      else next(createError("internal server error", 505));
    }
  }
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await categoryService.get();

      res.status(200).json(successResponse("create category successfully", category, 200));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 402));
      else next(createError("internal server error", 505));
    }
  }
  async put(req: Request, res: Response, next: NextFunction) {
    try {
      const CategoryDTO: CategoryDTO = req.body;
      const category = await categoryService.put(CategoryDTO);

      res.status(200).json(successResponse("update category successfully", category, 200));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 402));
      else next(createError("internal server error", 505));
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const CategoryId: string = req.params.categoryId;
      const category = await categoryService.delete(+CategoryId);

      res.status(200).json(successResponse("delete category successfully", category, 200));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 402));
      else next(createError("internal server error", 505));
    }
  }
}

export default new CategoryController();
