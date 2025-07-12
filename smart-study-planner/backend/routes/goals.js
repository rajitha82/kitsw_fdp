const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// Add Goal
router.post('/', async (req, res) => {
  try {
    const goal = new Goal(req.body);
    await goal.save();
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Goals by User ID
router.get('/:userId', async (req, res) => {
  const goals = await Goal.find({ userId: req.params.userId });
  res.json(goals);
});

// Update Goal
router.put('/:id', async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(goal);
});

// Delete Goal
router.delete('/:id', async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Goal deleted' });
});

module.exports = router;
