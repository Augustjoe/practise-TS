# TS 编译选项
  1. tsc <文件名> -w 监视文件变化，自动编译
  2. tsc -init 可生成TS配置文件，再输入tsc -w 可监视所有文件
# webpack
  webpack设置启动项时要设置mode，表示启动环境
  1. webpack-dev-server 可在本地启动一个服务器，用于实时查看修改
  2. 使用 babel 更改代码的es版本匹配更多的浏览器
     npm i @babel/core @babel/preset-env babel-loader core-js
