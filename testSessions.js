// server/routes/testSessions.js
const express = require('express');
const router = express.Router();
const { TestSession } = require('../models');

// Start new test session
router.post('/start', async (req, res) => {
    try {
        const { userId, category, jurisdiction } = req.body;
        
        const session = new TestSession({
            user: userId,
            category,
            startTime: new Date(),
            jurisdiction
        });
        
        await session.save();
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ message: 'Error starting test session', error: error.message });
    }
});

// Submit answer
router.post('/:sessionId/submit', async (req, res) => {
    try {
        const { questionId, answer, timeSpent } = req.body;
        const session = await TestSession.findById(req.params.sessionId);
        
        if (!session) {
            return res.status(404).json({ message: 'Session not found' });
        }

        await session.submitAnswer(questionId, answer, timeSpent);
        res.json({ message: 'Answer submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting answer', error: error.message });
    }
});

// Complete test session
router.post('/:sessionId/complete', async (req, res) => {
    try {
        const session = await TestSession.findById(req.params.sessionId);
        
        if (!session) {
            return res.status(404).json({ message: 'Session not found' });
        }

        const results = await session.completeSession();
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error completing session', error: error.message });
    }
});

// Get session results
router.get('/:sessionId', async (req, res) => {
    try {
        const session = await TestSession.findById(req.params.sessionId)
            .populate('questions.question');
        
        if (!session) {
            return res.status(404).json({ message: 'Session not found' });
        }

        res.json(session);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching session', error: error.message });
    }
});

module.exports = router;