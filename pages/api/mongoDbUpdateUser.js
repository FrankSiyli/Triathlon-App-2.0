import dbConnect from "../../database/dbConnect";
import User from "../../database/models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { email, trainingPlans, id } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const existingTrainingPlanIds = user.trainingPlans.map((plan) => plan.id);
      if (!existingTrainingPlanIds.includes(id)) {
        user.trainingPlans.addToSet(trainingPlans);
      } else {
        console.log("Training plan already exists for this user");
      }
      await user.save();
      return res.status(201).json({ message: "User updated" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while updating user" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
