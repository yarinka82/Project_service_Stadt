import { Category } from "../../db/models/index.js";

export const getCategoriesRepo = async () => {
  const data: any = await Category.findAll({
    attributes: ["id", "name", "description"],
  });

  const PlainData = data.map((el: any) => el.get({ plain: true }));

  return PlainData;
};
