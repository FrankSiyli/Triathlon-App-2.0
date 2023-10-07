import { Timestamp } from "mongodb";
import mongoose, { Schema, models } from "mongoose";

const ActivateTokenSchema = new Schema(
  {
    id: {
      type: Number,
    },
    token: {
      type: String,
    },
    activatedAt: {
      type: Timestamp,
    },
  },
  { timestamps: true }
);

const ActivateToken =
  models.ActivateToken || mongoose.model("ActivateToken", ActivateTokenSchema);

export default ActivateToken;
