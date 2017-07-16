let webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

let config = require('./webpack.config');


const port = 4000,
    ip = 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
}).listen(port, ip, function (err) {
    if(err) {
        return console.log(err);
    }

    console.log('Listening at ' + ip + ':' + port);
});
