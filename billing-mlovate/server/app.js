const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const startServer = dev => {
  return new Promise(resolve => {
    if (dev) return resolve(8000);
    const app = express();
    const publicPath = path.resolve(__dirname, '../build');

    // for static assets
    app.use(express.static(publicPath));
    app.use(cookieParser());

    const server = app.listen(0, () => {
      console.log(`Express server listening on port ${server.address().port}`);
      resolve(server.address().port);
    });

    app.get('/', (_, res) => {
      res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
  });
};

module.exports = {
  startServer,
};
