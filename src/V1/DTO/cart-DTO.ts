export interface CartDTO {
  cart: {
    countItem: number;
    product: {
      images: {
        id: number;
        productId: number;
        imageUrl: string;
      }[];
    } & {
      id: number;
      name: string;
      description: string;
      price: string;
      quantity: string;
      profileId: number | null;
      createdAt: Date;
      categoryId: number | null;
    };
  }[];
  _count: {};
}
