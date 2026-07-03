import { Company, Address, Zip, City, State } from "../../db/models/index.js";

export const getCompaniesRepo = async () => {
  const data: any = await Company.findAll({
    attributes: ["id", "name", "description", "logo"],
    include: [
      {
        model: Address,
        include: [
          {
            model: Zip,
            attributes: ["code"],
          },
          {
            model: City,
            attributes: ["name"],
          },
          {
            model: State,
            attributes: ["name"],
          },
        ],
      },
    ],
    raw: true,
    //nest: false,
  });

  return data;
};
