export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  api_url: process.env.API_BASE_URL,
});
