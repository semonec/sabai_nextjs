import { request } from "http";
import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(req);
  console.log(JSON.stringify(req));

  const movies = await db
    .collection("sabai")
    .find({})
    .limit(20)
    .toArray();
  res.json(movies);
};