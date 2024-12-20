// server/routes/users.js
const express = require('express');
const router = express.Router();
const { User, TestSession } = require('../models');

// Get user profile
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .select('-security'); // Exclude sensitive info
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
    }
});

// Update user profile
router.put('/:userId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error: error.message });
    }
});

// Get user's test history
router.get('/:userId/test-history', async (req, res) => {
    try {
        const testHistory = await TestSession.find({ user: req.params.userId })
            .sort({ startTime: -1 })
            .populate('questions.question', 'category');
            
        res.json(testHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching test history', error: error.message });
    }
});

// Get user's progress by category
router.get('/:userId/progress/:category', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const categoryProgress = user.progress.categoryProgress.find(
            cp => cp.category === req.params.category
        );

        res.json(categoryProgress || { message: 'No progress found for this category' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching progress', error: error.message });
    }
});

// Update study preferences
router.patch('/:userId/preferences', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $set: { preferences: req.body } },
            { new: true, runValidators: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user.preferences);
    } catch (error) {
        res.status(500).json({ message: 'Error updating preferences', error: error.message });
    }
});

module.exports = router;