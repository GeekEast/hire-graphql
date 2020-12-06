export default () => ({
  port: parseInt(process.env.GRAPHQL_PORT, 10) || 4000,
  api_url: `http://${process.env.API_HOST}:${process.env.API_PORT}`,
});
