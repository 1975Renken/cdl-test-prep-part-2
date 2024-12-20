// server/routes/jurisdictions.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

// Get all jurisdictions
router.get('/', async (req, res) => {
    try {
        const jurisdictionsDir = path.join(__dirname, '../seeds/jurisdictions');
        const files = await fs.readdir(jurisdictionsDir);
        
        const jurisdictions = await Promise.all(
            files
                .filter(file => file.endsWith('.js'))
                .map(async (file) => {
                    const jurisdictionPath = path.join(jurisdictionsDir, file);
                    return require(jurisdictionPath);
                })
        );
        
        // Format the response to match what the frontend expects
        const formattedJurisdictions = jurisdictions.map(j => ({
            code: j.code,
            name: j.name,
            type: j.type
        }));

        res.json(formattedJurisdictions);
    } catch (error) {
        console.error('Error loading jurisdictions:', error);
        res.status(500).json({ message: 'Error fetching jurisdictions', error: error.message });
    }
});

// Get specific jurisdiction details
router.get('/:code', async (req, res) => {
    try {
        const jurisdictionPath = path.join(
            __dirname, 
            '../seeds/jurisdictions', 
            `${req.params.code.toLowerCase()}.js`
        );
        
        const jurisdiction = require(jurisdictionPath);
        
        if (!jurisdiction) {
            return res.status(404).json({ message: 'Jurisdiction not found' });
        }
        
        res.json(jurisdiction);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jurisdiction', error: error.message });
    }
});

module.exports = router;