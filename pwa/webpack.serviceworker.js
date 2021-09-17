import { GenerateSW } from 'workbox-webpack-plugin';
import { join } from "path";

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

export const mode = 'production';
export const devtool = 'source-map';
export const target = 'webworker';
export const entry = {
  main: join(__dirname, 'assets/js', 'service-worker.js'),
};
export const output = {
  path: join(__dirname, 'static'),
  filename: '[name].[fullhash].js',
  clean: true,
};
export const performance = {
  maxEntrypointSize: 400000,
  maxAssetSize: 100000,
  hints: 'warning'
};
export const plugins = [
  new FileListPlugin(),
  new GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  })
];
