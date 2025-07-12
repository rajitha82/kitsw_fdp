const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  deadline: Date,
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  estimatedTime: Number, // in minutes
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);