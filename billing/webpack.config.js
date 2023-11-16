const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = withModuleFederationPlugin({
  name: 'billing',
  exposes: {
    './Module': './billing/src/app/billing/billing.module.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
