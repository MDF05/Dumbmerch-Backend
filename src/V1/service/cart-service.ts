import { Cart } from "@prisma/client";
import { CartDTO } from "../DTO/cart-DTO";
import cartRepository from "../repository/cart-repository";
import userRepository from "../repository/user-repository";

interface updateCart extends Cart {
  addCart: number;
}

class CartService {
  async getCartByUserId(userId: number): Promise<CartDTO> {
    const cart: CartDTO = await userRepository.findCartByUserId(userId);
    return cart;
  }

  async postCartByUserAndProductId(userId: number, productId: number): Promise<updateCart> {
    const findCart: Cart | null = await cartRepository.findCartByUserIdAndProductId(userId, productId);

    if (findCart) {
      const update = await cartRepository.udpateCartByCartId(findCart.id, findCart.countItem);
      if (!update) throw new Error("faild to update cart");
      return { ...update, addCart: 0 };
    }

    const cart: Cart = await cartRepository.postCartByUserAndProductId(userId, productId);
    return { ...cart, addCart: 1 };
  }
}

export default new CartService();
