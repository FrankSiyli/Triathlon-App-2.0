import dbConnect from "../../database/dbConnect";
import Plan from "../../database/models/Plan";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const plans = await Plan.find();
      return response.status(200).json({ plans });
    } catch (error) {
      return response.status(500).json({ message: "Server error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
