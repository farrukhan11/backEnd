import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subToDos: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SubTodos",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("SubTodo", subTodoSchema);
