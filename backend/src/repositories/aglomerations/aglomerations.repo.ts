import { Aglomeration, City, State } from "../../db/models/index.js";

export const getAglomerationsRepo = async () => {
  const data = await Aglomeration.findAndCountAll({
    attributes: {
      include: ["id"],
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: City,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: State,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    where: {},
    subQuery: false,
    order: [["id", "ASC"]],
    distinct: true,
    nest: true,
  });

  const aglomerations = data;

  return aglomerations;
};
