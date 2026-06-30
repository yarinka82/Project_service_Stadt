import { Category } from "../db/models/index.js";

export const getCategoriesRepo = async () => {
  const data: any = await Category.findAll({
    attributes: ["id", "name", "description"],
  });

  const categories = data.map((el) => ({
    id: el.id,
    name: el.name,
    description: el.description,
  }));

  return categories;
};
