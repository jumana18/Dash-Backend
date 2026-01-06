import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://jumanahasinkammiyil_db_user:AlZR1CgiXF4Ixdlx@cluster0.xpjex1m.mongodb.net/yourDBName"
      )
      .then(() => {
        console.log("Database connected successfully");
      });
  } catch (error) {
    console.log(error);
  }
};
