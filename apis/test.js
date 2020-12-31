import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("sabai")
    .find({})
    .limit(20)
    .toArray();
  res.json(movies);
};