import { ImageUrlTypes } from "../utils/types/image-url-types";

export interface ProductDTO {
  name: string;
  description: string;
  price: string;
  quantity: string;
  images: ImageUrlTypes[];
  category: string;
}
