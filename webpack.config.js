module.exports = {
   entry: __dirname + '/app/main.js',
   output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
   },

   devtool: 'cheap-module-source-map',

   devServer: {
      contentBase: './public',//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
   },

   module: {
      rules: [
         {
            test: /(.js[x]?)$/,
            use: {
               loader: "babel-loader",
            },
            exclude: /node_modules/
         },
         {
            test: /.css$/,
            use: [
               {
                  loader: "style-loader"
               },{
                  loader: "css-loader"
               }
            ]
         }
      ]
   }
}