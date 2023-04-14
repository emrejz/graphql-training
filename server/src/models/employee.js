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
  address: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    default: "developer",
  },
  email: {
    type: String,
    uniq: true,
    required: true,
  },
});

export default mongoose.model("employees", employeeSchema);
