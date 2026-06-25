import { City, Zip, State, GlobalAddress } from "../db/models/index.js";

interface CityInt {
  id: number;
  City: { name: string };
  Zip: { code: string };
  State: { name: string };
}

type CitiesListType = CityInt[] | [];

export async function getCitiesRepo() {
  /// type correction !!!
  const data: any = await GlobalAddress.findAll({
    attributes: ["id"],
    include: [
      { model: City, attributes: ["name"] },
      { model: Zip, attributes: ["code"] },
      { model: State, attributes: ["name"] },
    ],
  });

  const cities = data.map((el: CityInt) => ({
    id: el.id,
    city: el.City.name,
    zip: el.Zip.code,
    state: el.State.name,
  }));

  return cities;
}
