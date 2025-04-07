import mongoose from "mongoose";

export const connectDB = async () => {
	try {
	  const conn = await mongoose.connect(process.env.MONGO_URI, {
		connectTimeoutMS: 30000,
		socketTimeoutMS: 45000,
		serverSelectionTimeoutMS: 30000,
		heartbeatFrequencyMS: 10000,
		retryWrites: true,
		retryReads: true,
	  });
	  console.log(`MongoDB connected: ${conn.connection.host}`);
  
	  mongoose.connection.on("error", (err) => {
		console.error(`MongoDB connection error: ${err.message}`);
	  });
  
	  mongoose.connection.on("disconnected", () => {
		console.warn("MongoDB connection lost. Attempting to reconnect...");
	  });
	} catch (error) {
	  console.log("Error connecting to MONGODB", error.message);
	  process.exit(1);
	}

  };

  