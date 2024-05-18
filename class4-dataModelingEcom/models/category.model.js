import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    catName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
