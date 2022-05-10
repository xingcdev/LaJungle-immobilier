// Config from React app rewire alias docs
// see: https://github.com/oklas/react-app-rewire-alias#usage

const { alias, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = alias(aliasMap);
// module.exports.jest = aliasJest(aliasMap);
