// server/routes/index.js
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const questionRoutes = require('./questions');
const testSessionRoutes = require('./testSessions');
const userRoutes = require('./users');
const jurisdictionRoutes = require('./jurisdictions');

// Mount routes
router.use('/auth', authRoutes);
router.use('/questions', questionRoutes);
router.use('/test-sessions', testSessionRoutes);
router.use('/users', userRoutes);
router.use('/jurisdictions', jurisdictionRoutes);

module.exports = router;