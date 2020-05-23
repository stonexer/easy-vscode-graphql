const path = require('path');

module.exports = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'out'),
    libraryTarget: 'commonjs2',
  },
  entry: {
    extension: ['./src/client/extension'],
    server: ['./src/server'],
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['main', 'module'],
  },
  externals: {
    vscode: 'commonjs vscode',
    '@graphql-toolkit/common': '@graphql-toolkit/common',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/typescript',
                [
                  '@babel/env',
                  {
                    targets: {
                      node: 'current',
                    },
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-nullish-coalescing-operator',
              ],
            },
          },
        ],
      },
    ],
  },
};
