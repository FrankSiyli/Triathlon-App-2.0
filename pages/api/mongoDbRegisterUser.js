import dbConnect from "../../database/dbConnect";
import User from "../../database/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({ message: "User registered" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while registration" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
