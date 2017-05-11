const resolve = require('path').resolve;

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: 'airbnb/base',
  plugins: ['html'],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': resolve(__dirname, 'client'),
              '~api': resolve(__dirname, 'client/api'),
              '~assets': resolve(__dirname, 'client/assets'),
              '~components': resolve(__dirname, 'client/components'),
              '~mixins': resolve(__dirname, 'client/mixins'),
              '~pages': resolve(__dirname, 'client/pages'),
              '~plugins': resolve(__dirname, 'client/plugins'),
              '~static': resolve(__dirname, 'client/static'),
              '~store': resolve(__dirname, 'client/store'),
              '~utils': resolve(__dirname, 'client/utils'),
            },
          },
        },
      },
    },
  },
  rules: {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
  },
};
