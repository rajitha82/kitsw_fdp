const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smart_study_planner', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Error:', err));