const { override } = require("customize-cra");
const { addReactRefresh } = require("customize-cra-react-refresh");

module.exports = override(config => {
  config.output.globalObject = "self";
  return config;
}, addReactRefresh({ disableRefreshCheck: true }));
