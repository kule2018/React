const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入在内存中生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html' //生成的内存中首页的名称
})



// 向外暴露一个打包的配置对象
// 因为webpack是基于Node构建的，所以webpack支持所有的Node API和语法
// webpack默认只能打包处理.js后缀名类型的文件；像.png .vue无法主动处理，所以需要配置第三方的loader
module.exports = {
    mode: 'development', //development  production
    // 在webpack 4.x 中，有一个很大的特性，就是约定大于配置，约定，默认的打包入口路径是src->index.js
    plugins: [
        htmlPlugin
    ],
    module: { //所有第三方模块的配置规则
        rules: [ //第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, //千万别忘记添加exclude排除项

            // 可以在css-loader之后，通过？追加参数
            // 其中，有个固定的参数，叫做modules，表示为普通的样式表，启用模块化
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //打包处理css样式表的第三方loader，从右向左匹配

            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, //打包处理字体文件的loader

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader']
            }, //打包处理scss文件的loader
        ]

    },
    resolve: { //表示，这几个文件的后缀名，可以省略不写
        extensions: ['.js', '.jsx', '.json'],
        alias: { //表示别名
            '@': path.join(__dirname, './src') //这样，@就表示，项目根目录中src这一层路径
        }
    }
}

// 行不行？ 目前不行
// 因为这是es6中向外导出模块的API与之对应的是import ** from '路径标识符'
// export default {}
// 哪些特性Node支持呢？
// 如果chrome浏览器支持哪些，则Node就支持哪些