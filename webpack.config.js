/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const AddModuleExportsPlugin = require('add-module-exports-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './source/index.ts',
	target:'node',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		library: 'payw',
		libraryTarget: 'commonjs2',
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
        new AddModuleExportsPlugin()
    ]
};