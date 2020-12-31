import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(req);

  const item = {
    time: Date.now(), 
    data: req.body
  };

  const movies = await db
    .collection("sabai")
    .insertOne(item)
  res.json(item);
};