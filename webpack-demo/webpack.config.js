const path = require('path');

/*
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
“可扩展的 webpack 配置”是指，可重用并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并。
*/
// 可以多个入口，但一定只有一个出口，output 选项可以控制 webpack 如何向硬盘写入编译文件
module.exports = {
    entry: './src/index.js',  //单个文件入口，简写前等价于 entry:{main:'./src/index.js'}
    output: {
        filename: 'bundle.js',  //filename用于输出文件的文件名。
        path: path.resolve(__dirname, 'dist') // 目标输出目录 path 的绝对路径。
    },
    module:{
        rules:1s
    }
};