import Redis from 'ioredis';

const redisClient = new Redis();
redisClient.on('connect', () => {
  console.log('[*] Redis connected.');
});

export default { redisClient };
