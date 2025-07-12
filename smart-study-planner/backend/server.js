const express = require('express');
const cors = require('cors');
require('./db'); // MongoDB connection

const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const goalRoutes = require('./routes/goals');
const suggestionRoutes = require('./routes/suggestions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/suggestions', suggestionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
