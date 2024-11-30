import { Product } from "@prisma/client";
import prisma from "../libs/prisma";
import { ProductDTO } from "./../DTO/product-DTO";

class ProductRepository {
  async post(productDTO: ProductDTO): Promise<Product> {
    const { images, category, ...otherProductDto } = productDTO;

    return await prisma.product.create({
      data: {
        ...otherProductDto,
        categoryId: +category,
        images: {
          createMany: {
            data: images,
          },
        },
      },
    });
  }

  async getAllProducts(querySearch? : string): Promise<Product[]> {
    const query = querySearch?.toLocaleLowerCase()

    return await prisma.product.findMany({
      where : {
        OR : [{name : {contains : query}}, {description : {contains : query}}, {price : {contains : query}}]
      },
      include: {
        images: true,
      },
    });
  }

  async update(productDTO: ProductDTO, productId: number): Promise<Product> {
    const { images, category, ...otherProductDto } = productDTO;
    return await prisma.product.update({
      where: { id: productId },
      data: {
        ...otherProductDto,
      },
    });
  }
  async delete(productId: number): Promise<Product> {
    return await prisma.product.delete({ where: { id: productId } });
  }
}

export default new ProductRepository();
