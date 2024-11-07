import { Router } from "express";
import AuthRouter from "../V1/router/auth-router";
import ProfileRouter from "../V1/router/profile-router";
import ProductRouter from "../V1/router/product-router";
import CategoryRouter from "../V1/router/category-router";
import CartRouter from "../V1/router/cart-router";

const V1Router = Router();

V1Router.use(AuthRouter);
V1Router.use(ProfileRouter);
V1Router.use(ProductRouter);
V1Router.use(CategoryRouter);
V1Router.use(CartRouter);

export default V1Router;
