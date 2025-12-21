const express = require('express');
const app = express();
const PORT = 3000;
const { connectDB } = require('./config/db');
const courseRoutes = require('./routes/course.route');
const cors = require('cors');


app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server port
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use('/api/courses', courseRoutes);
app.use(express.json());

connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});