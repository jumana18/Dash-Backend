const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const courseRoutes = require("./routes/course.route");
const studentRoutes = require("./routes/student.routes"); // 🔥 ADD THIS

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// 🔥 REGISTER ROUTES
app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes); // 🔥 THIS WAS MISSING

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
