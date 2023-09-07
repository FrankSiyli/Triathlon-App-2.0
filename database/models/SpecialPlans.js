import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: { type: String },
  distance: { type: Number },
  duration: { type: Number },
  zone: { type: String },
  imageLink: { type: String },
});

const specialPlansSchema = new Schema({
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
                  exercises: [exerciseSchema],
                },
              ],
              main: [
                {
                  multiplier: { type: Number },
                  exercises: [exerciseSchema],
                },
              ],
              coolDown: [
                {
                  multiplier: { type: Number },
                  exercises: [exerciseSchema],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const SpecialPlans =
  mongoose.models.SpecialPlans ||
  mongoose.model("plans_special", specialPlansSchema);

export default SpecialPlans;
