const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'awesome-typescript-loader',
				exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: "babel-loader",
            },
			{
				test: /\.less$/,
				use: [ 'style-loader', 'css-loader', 'less-loader' ],
			},
        ],
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        stats: 'errors-only',
        hot: true,
        historyApiFallback: true,
    },
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Coding Task",
		}),
		new HtmlWebpackPartialsPlugin({
			path: path.join(__dirname, './src/root.html'),
		}),
	],
}