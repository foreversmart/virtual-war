var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./webpack.config')
var chalk = require('chalk')

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-react-component-tools': 'true'
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    proxy: {
        "/api": {
            pathRewrite: {
                "^/api": ''
            },
            target: "http://localhost:9091"
        }
    }
}).listen(9091, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log(chalk.cyan(`Listening at http://localhost:9091}/`))
});