const {GenerateSW} = require('workbox-webpack-plugin');
const path = require("path");

class FileListPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      let a = { files: [] };
      for (let filename in compilation.assets) {
        a.files.push(filename);
        let f = filename.split('.');
        let filetype = f[f.length - 1];
        if (filetype === 'css' || filetype === 'js')
          a[filetype] = {
            filename: filename,
            hash: f[f.length - 2]
          };
      }
      a = JSON.stringify(a);
      // Insert this list into the webpack build as a new file asset:
      compilation.assets['filelist.json'] = {
        source: () => { return a },
        size: () => { return a.length }
      };
      callback();
    });
  }
}

module.exports = {

  mode: 'production',
  devtool: 'source-map',

  target: 'webworker',

  entry: {
    main: path.join(__dirname, 'assets/js', 'service-worker.js'),
  },

  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].[fullhash].js',
  },

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,
    hints: 'warning'
  },

  plugins: [
    new FileListPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  ]

};
