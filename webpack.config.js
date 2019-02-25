var path = require("path");
module.exports = {
  // entry: './src/main.js', // 项目入口 我们通过npm run dev 就是从这里进去的 我们通过run build 打包编译也是
  // 因为我们要打包的插件在lib里面 所以稍稍改一下
  entry: "./src/index.js", // 注释掉原有的
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    // filename: 'build.js' // 打包后输出的文件名
    filename: "vue-filter.js", // 我们可不想打包后叫build.js 多low啊 起一个与项目相对应的
    library: "vuefilter", // library指定的就是你使用require时的模块名，这里便是require("PayKeyboard")
    libraryTarget: "umd", //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
  }
};
