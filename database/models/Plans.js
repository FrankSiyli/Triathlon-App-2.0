import mongoose from "mongoose";
import { plansSchema } from "../schemas/plansSchema";

const Plans = mongoose.models.Plans || mongoose.model("Plans", plansSchema);

export { Plans };
