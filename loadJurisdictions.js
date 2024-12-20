// server/scripts/loadJurisdictions.js
const mongoose = require('mongoose');
const fs = require('fs').promises;
const path = require('path');
const { Jurisdiction } = require('../models');

async function loadJurisdictions() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/cdl-practice', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Read all jurisdiction files
    const jurisdictionsDir = path.join(__dirname, '../seeds/jurisdictions');
    const files = await fs.readdir(jurisdictionsDir);

    // Load and format the data
    for (const file of files) {
      if (file.endsWith('.js')) {
        const jurisdiction = require(path.join(jurisdictionsDir, file));
        
        // Add status field required by your model
        jurisdiction.status = { isActive: true };

        // Update or insert the jurisdiction
        await Jurisdiction.findOneAndUpdate(
          { code: jurisdiction.code },
          jurisdiction,
          { upsert: true, new: true }
        );

        console.log(`Loaded jurisdiction: ${jurisdiction.code}`);
      }
    }

    console.log('All jurisdictions loaded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error loading jurisdictions:', error);
    process.exit(1);
  }
}

loadJurisdictions();