/* eslint strict: 0*/
'use strict';

const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack/webpack.config.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const partials = require('express-partials');
const favicon = require('express-favicon');
const Promise = require('bluebird');
const film = require('./routes/film');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(favicon(`${__dirname}/favicon.ico`));

Promise.onPossiblyUnhandledRejection((err) => {
  throw new Error(err);
});

app.use('/api/film', film);

if (isDeveloping) {
  app.set('host', 'http://localhost');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
  // const response = (req, res) => {
  //   res.write(middleware.fileSystem.readFileSync(path.resolve(__dirname, 'dist/index.html')));
  //   res.end();
  // };

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  // app.get('*', response);
}
app.use(express.static(`${__dirname}/dist`));
const response = (req, res) => {
  res.write(path.join(__dirname, 'dist/index.html'));
};
app.get('*', response);


const onStart = (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  );
};

if (!module.parent) {
  app.listen(port, 'localhost', onStart);
}

module.exports = app;