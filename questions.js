// server/routes/questions.js
const express = require('express');
const router = express.Router();

// Add your question routes here later
router.get('/', (req, res) => {
  res.json({ message: 'Questions route placeholder' });
});

module.exports = router;