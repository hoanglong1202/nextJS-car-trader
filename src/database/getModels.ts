import { openDB } from "../openDB";
export interface Model {
  model: string;
  count: number;
}
export async function getModels(make: string) {
  const db = await openDB();
  const models = await db.all<Model[]>(
    "select model, count(*) as count from car where make = ? group by model",
    make
  );
  return models;
}
