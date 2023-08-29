import dbConnect from "../../database/dbConnect";
import Plan from "../../database/models/Plan";
import Session from "../../database/models/Session";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const sessions = await Session.find();
      const plans = await Plan.find();
      return response.status(200).json({ sessions, plans });
    } catch (error) {
      return response.status(500).json({ message: "Server error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
