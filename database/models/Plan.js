import mongoose from "mongoose";

const { Schema } = mongoose;

const planSchema = new Schema({
  name: { type: String },
  price: { type: String },
  duration: { type: Number },
  sessions: [
    {
      week: { type: Number },
      sessions: [
        {
          day: { type: String },
          activity: { type: String },
          description: { type: String },
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: { type: Number },
                  exercises: [
                    {
                      name: { type: String },
                      distance: { type: Number },
                      duration: { type: Number },
                      zone: { type: String },
                    },
                  ],
                },
              ],
              main: [
                {
                  multiplier: { type: Number },
                  exercises: [
                    {
                      name: { type: String },
                      distance: { type: Number },
                      duration: { type: Number },
                      zone: { type: String },
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: { type: Number },
                  exercises: [
                    {
                      name: { type: String },
                      distance: { type: Number },
                      duration: { type: Number },
                      zone: { type: String },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const Plan = mongoose.models.Plan || mongoose.model("Plan", planSchema);

export default Plan;
