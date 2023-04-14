import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export default async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("Mongoose connected to ", result.connections[0].host);
  } catch (error) {
    console.log("error connecting to the database", error);
  }
};
