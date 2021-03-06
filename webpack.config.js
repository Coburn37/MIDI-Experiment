const webpack = require("webpack");

module.exports = {
 	mode: "development",
	context: __dirname,
	entry: "./src/index",
	output: {
		path: __dirname + "/public",
		publicPath: "/public",
		filename: "dist.js"
	},
	externals: {
		jzz: 'JZZ'
	},
	resolve: {
        alias : {
            "three-examples" : "three/examples/js"
        }
    },
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['env', {
							"targets": {
								"browsers": [
									"last 2 versions"
								]
							}
						}]
					],
					plugins: [
						["transform-runtime",{
							"regenerator": true,
						}]
					],
					cacheDirectory : true
				}
			}
		},{
            test : /(three[\\\/]examples[\\\/]js|(OBJLoader2|LoaderSupport)\.js$)/,
            loader : "imports-loader?THREE=three"
        }/*,{
			test: /dat\.gui[\\/].+\.html$/,
			use: {
				loader: "text-loader"
			}
		},{
			test: /dat\.gui[\\/].+\.scss$/,
			use: [{
				loader: "css-loader" // translates CSS into CommonJS
			},{
				loader: "sass-loader"
			}]
		}*/]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};