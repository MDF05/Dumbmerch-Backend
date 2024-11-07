import { Router } from "express";
import categoryController from "../controller/category-controller";
import authentication from "./../middleware/authentication";

const CategoryRouter = Router();

CategoryRouter.post("/category", authentication, categoryController.post);
CategoryRouter.get("/category", authentication, categoryController.get);
CategoryRouter.put("/category", authentication, categoryController.put);
CategoryRouter.delete("/category/:categoryId", authentication, categoryController.delete);

export default CategoryRouter;
