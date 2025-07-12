const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// Add Suggestion
router.post('/', async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    await suggestion.save();
    res.json(suggestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Suggestions by User ID
router.get('/:userId', async (req, res) => {
  const suggestions = await Suggestion.find({ userId: req.params.userId });
  res.json(suggestions);
});

// Delete Suggestion
router.delete('/:id', async (req, res) => {
  await Suggestion.findByIdAndDelete(req.params.id);
  res.json({ message: 'Suggestion deleted' });
});

module.exports = router;
