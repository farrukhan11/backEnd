import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      loweCase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", user);
