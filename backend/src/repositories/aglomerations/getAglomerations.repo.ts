import { Aglomeration } from "../../db/models/index.js";

export const getAglomerationsRepo = async () => {
  const data = await Aglomeration.findAll({
    attributes: {
      include: ["id"],
      exclude: ["createdAt", "updatedAt"],
    },
  });

  const plainData = data.map((el: any) => el.get({ plain: true }));

  return plainData;
};
