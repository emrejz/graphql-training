import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  pic: {
    type: String,
    trim: true,
  },
  vote: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("employees", employeeSchema);
