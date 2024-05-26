import express from 'express';
import connectDB from './db.connect.js';
import Course from './course/course.model.js';

const app = express();

// to make app understand json
app.use(express.json());

// connect db
connectDB();

// ? create routes here
app.post('/course/add', async (req, res) => {
  // extract new course from req.body
  const newCourse = req.body;

  await Course.create(newCourse);

  return res.status(201).send({ message: 'Course is added successfully.' });
});

// ? get courses
app.get('/course/list', async (req, res) => {
  const courses = await Course.find();

  return res.status(200).send({ message: 'success', courseList: courses });
});

// network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
