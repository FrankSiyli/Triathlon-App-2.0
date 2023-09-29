import dbConnect from "../../database/dbConnect";
import User from "../../database/models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { email } = req.query;

      const user = await User.findOne({ email });

      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while fetching user data" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
