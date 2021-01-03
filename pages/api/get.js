import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(req);

  const movies = await db
    .collection("sabai")
    .find({})
    .limit(100)
    .toArray();
  res.json(movies);
};