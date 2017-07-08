const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/app/assets/'
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'app'),
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};