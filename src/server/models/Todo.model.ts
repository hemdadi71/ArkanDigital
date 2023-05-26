import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    minlength: [5, 'Description cannot be less than 5 characters'],
  },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
