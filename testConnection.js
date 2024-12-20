// scripts/testConnection.js
require('dotenv').config();
const connectDB = require('../config/database');

async function testConnection() {
    try {
        await connectDB();
        console.log('Database connection test successful!');
        
        // Wait a bit to see the messages
        setTimeout(() => {
            process.exit(0);
        }, 1000);
    } catch (error) {
        console.error('Database connection test failed:', error);
        process.exit(1);
    }
}

testConnection();