const path = require('path');

module.exports = {
  loading: {
    color: '#92D3CE',
  },
  rootDir: path.resolve(__dirname),
  srcDir: path.resolve(__dirname, 'client'),
  dev: process.env.NODE_ENV !== 'production',
  build: {
    extend(config) {
      const aliases = Object.assign(config.resolve.alias, { '~feathers': path.resolve(__dirname, 'client/feathers') });
      config.resolve.alias = aliases; // eslint-disable-line no-param-reassign
    },
  },
};
