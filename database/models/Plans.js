import mongoose from "mongoose";
import { PlansSchema } from "../schemas/PlansSchema";

const Plans = mongoose.models.Plans || mongoose.model("plans", PlansSchema);

export { Plans };
