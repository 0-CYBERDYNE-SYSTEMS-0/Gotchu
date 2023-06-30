const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@chakra-ui/react', '@emotion/react', '@emotion/styled']);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  env: {
    GPT_API_KEY: process.env.GPT_API_KEY,
    SYSTEM_MESSAGE: process.env.SYSTEM_MESSAGE
  },
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname;
    return config;
  },
});