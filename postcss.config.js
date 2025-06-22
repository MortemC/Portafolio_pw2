// postcss.config.js
const { PurgeCSS } = require('purgecss');

module.exports = {
  plugins: [
    {
      postcssPlugin: 'purgecss',
      Once(root, { result }) {
        return new PurgeCSS().purge({
          content: ['./index.html', './src/**/*.js'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }).then(resultPurge => {
          root.removeAll();
          root.append(resultPurge[0].css);
        });
      }
    }
  ],
};
