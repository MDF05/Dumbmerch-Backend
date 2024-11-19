import { Cart } from "@prisma/client";
import prisma from "../libs/prisma";
import { CartDTO } from "./../DTO/cart-DTO";

class CartRepository {
  postCartByUserAndProductId(userId: number, productId: number): Promise<Cart> {
    return prisma.cart.create({
      data: {
        userId,
        productId,
      },
    });
  }
  findCartByUserIdAndProductId(userId: number, productId: number): Promise<Cart | null> {
    return prisma.cart.findFirst({
      where: {
        userId,
        productId,
      },
    });
  }
  udpateCartByCartId(cartId: number, countItem: number): Promise<Cart | null> {
    return prisma.cart.update({
      where: {
        id: cartId,
      },
      data: {
        countItem: countItem + 1,
      },
    });
  }
}

export default new CartRepository();
