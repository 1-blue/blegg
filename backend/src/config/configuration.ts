export default () => ({
  port: parseInt(process.env.PORT, 10) || 3050,
  database: {
    url: process.env.DATABASE_URL,
  },
  keys: {
    riot: process.env.RIOT_API_KEY,
  },
});
