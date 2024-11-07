import prisma from "../libs/prisma";
import { CategoryDTO } from "./../DTO/category-DTO";
import { Category } from "@prisma/client";

class CategoryRepository {
  async post(CategoryDTO: CategoryDTO): Promise<Category> {
    return await prisma.category.create({ data: CategoryDTO });
  }

  async get(): Promise<Category[]> {
    return await prisma.category.findMany();
  }

  async update(CategoryDtO: CategoryDTO): Promise<Category> {
    const { id, name } = CategoryDtO;
    return await prisma.category.update({ where: { id: id }, data: { name } });
  }

  async delete(categoryId: number): Promise<Category> {
    return await prisma.category.delete({ where: { id: categoryId } });
  }
}

export default new CategoryRepository();
