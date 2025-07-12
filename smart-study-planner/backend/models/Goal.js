const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  goal: String,
  progress: Number,
});

module.exports = mongoose.model('Goal', goalSchema);