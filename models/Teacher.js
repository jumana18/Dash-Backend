const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true }, // duplicates allowed now
    phone: { type: String, required: true },
    department: { type: String, required: true },
    course: {
          type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
          } ,
          image: {
            type:String,
            default:null,
          },
          
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
