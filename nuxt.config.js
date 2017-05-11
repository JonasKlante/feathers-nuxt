const path = require('path');

module.exports = {
  loading: { color: '#92D3CE' },
  router: { middleware: 'do-auth' },
  rootDir: path.resolve(__dirname),
  srcDir: path.resolve(__dirname, 'client'),
  dev: process.env.NODE_ENV !== 'production',
  build: {
    extend(config) {
      const aliases = Object.assign(config.resolve.alias, {
        '~api': path.resolve(__dirname, 'client/api'),
        '~mixins': path.resolve(__dirname, 'client/mixins'),
        '~utils': path.resolve(__dirname, 'client/utils'),
      });
      config.resolve.alias = aliases; // eslint-disable-line no-param-reassign
    },

    vendor: [
      'feathers/client',
      'feathers-socketio/client',
      'socket.io-client',
      'feathers-hooks',
      'feathers-authentication-client',
    ],
  },
};
