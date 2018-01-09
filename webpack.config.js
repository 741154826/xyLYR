// 该文件其实最终是要在 Node 环境下执行的
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
//热更新
const webpack = require('webpack')

// 导出一个具有特殊属性配置的对象
module.exports = {
  entry: ['babel-polyfill', './src/js/main.js'], // 入口文件模块路径
  output: {
    path: path.join(__dirname, './dist/'), // 出口文件模块所属目录，path 必须是一个绝对路径
    filename: 'bundle.js' // 打包的结果文件名称
  },
  plugins: [
    new htmlWebpackPlugin({
        template: './index.html'
      }),
    //热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    //由于./dist中的文件找不到第三方包，路径不对，要加../
    //所以把contentBase设置成'./'
    //dist在开发阶段处于缓存中
    //所以和第三方包就处在同级目录中了
    //所以就可以找到了，就不会报错了
    contentBase: './',
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }
    hot: true//热更新
  },
  externals: {
    vue: 'Vue',
    jquery: 'jQuery',
    'vue-router': 'VueRouter'
  },
  module:{
    rules:[
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 不转换 node_modules 中的文件模块
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /.vue$/,
        use: [
          'vue-loader'
        ] 
      }
    ]
  }
}
