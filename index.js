const express = require("express");
const cors = require("cors");
const path = require("path"); // 👈 ADD THIS
const { connectDB } = require("./config/db");

const courseRoutes = require("./routes/course.route");
const studentRoutes = require("./routes/student.routes");

const app = express();
const PORT = 3000;

// CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// JSON parser
app.use(express.json());

// 👇 ADD THIS (makes uploads public)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);

connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
