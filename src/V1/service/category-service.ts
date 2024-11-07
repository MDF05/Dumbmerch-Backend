import { CategoryDTO } from "../DTO/category-DTO";
import { Category } from "@prisma/client";
import categoryRepository from "../repository/category-repository";

class CategoryService {
  async post(CategoryDTO: CategoryDTO): Promise<Category> {
    return await categoryRepository.post(CategoryDTO);
  }
  async get(): Promise<Category[]> {
    return await categoryRepository.get();
  }
  async put(CategoryDTO: CategoryDTO): Promise<Category> {
    return await categoryRepository.update(CategoryDTO);
  }

  async delete(categoryId: number): Promise<Category> {
    return await categoryRepository.delete(categoryId);
  }
}

export default new CategoryService();
