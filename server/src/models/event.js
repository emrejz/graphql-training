import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = Schema({
  target: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("events", eventSchema);
