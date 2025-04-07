import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export let redis;
try {
  redis = new Redis(process.env.UPSTASH_REDIS_URL);
  
  redis.on('error', (err) => {
    console.error('Redis connection error:', err);
  });
  
  redis.on('connect', () => {
    console.log('Connected to Redis successfully');
  });
} catch (error) {
  console.error('Failed to initialize Redis client:', error);
}