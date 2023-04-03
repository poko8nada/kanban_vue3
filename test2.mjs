import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MongoDB = process.env.MONGODB_URL
const connection = () => mongoose.connect(MongoDB)

const todoSchema = new mongoose.Schema({
  todoId: {
    type: Number,
    required: true,
  },
  todoTitle: String,
});

const Todo = mongoose.model('Todo', todoSchema)
const TodoSample = new Todo(
  {
    todoId: 2,
    todoTitle: 'test-test',
  }
)

const forSave = TodoSample.save();


try {
  connection();
  console.log("success : connected to mongoDB");
  forSave();
} catch (error) {
  console.log("error connected to database");
}