// server/config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Options for the MongoDB connection
      useNewUrlParser: true,      // Use new URL parser
      useUnifiedTopology: true,   // Use new Server Discovery and Monitoring engine
    });

    // Log successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle errors after initial connection
    mongoose.connection.on('error', err => {
      console.error(`MongoDB connection error: ${err}`);
    });

    // Log when disconnected
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    // Handle application termination
    process.on('SIGINT', async () => {
      // Close MongoDB connection before shutting down
      await mongoose.connection.close();
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });

  } catch (error) {
    // Handle initial connection errors
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB; 
