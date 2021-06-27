const path = require('path');

module.exports = {
    mode: 'development',
    entry: './login_via_websocket.js',
    output: {
          filename: 'bundle.js',
          path: path.join(__dirname, 'app/js')
    }
};
