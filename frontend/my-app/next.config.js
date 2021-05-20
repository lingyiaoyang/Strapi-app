const path = require('path');
require('dotenv').config();

module.exports = {
	env: {
		API_URL: process.env.API_URL,
	},
	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
	},

	webpack: (config) => {
		config.resolve.alias['component'] = path.join(__dirname, 'component');

		config.resolve.alias['public'] = path.join(__dirname, 'public');

		return config;
	},
};
