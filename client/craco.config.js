// This file is used to override create-create-app default webpack config

const path = require(`path`);

// Add custom import path alias
// see: https://stackoverflow.com/a/65746792
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		},
	},
};
