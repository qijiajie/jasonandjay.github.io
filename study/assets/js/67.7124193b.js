(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{202:function(e,n,t){"use strict";t.r(n);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[e._v("#")]),e._v(" Webpack")]),e._v(" "),t("h4",{attrs:{id:"_1、简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、简介","aria-hidden":"true"}},[e._v("#")]),e._v(" 1、简介")]),e._v(" "),t("ul",[t("li",[e._v("模块的打包器(将多个文件打包为一个文件)")]),e._v(" "),t("li",[e._v("自动化构建工具(和gulp类似)")]),e._v(" "),t("li",[e._v("在webpack当中任何一个文件都需要一个loader解析文件")])]),e._v(" "),t("h4",{attrs:{id:"_2、能干啥？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、能干啥？","aria-hidden":"true"}},[e._v("#")]),e._v(" 2、能干啥？")]),e._v(" "),t("ul",[t("li",[e._v("提升网站的响应速度，减少http 请求数")])]),e._v(" "),t("h5",{attrs:{id:"_3-1、开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、开始","aria-hidden":"true"}},[e._v("#")]),e._v(" 3_1、开始")]),e._v(" "),t("p",[e._v("cnpm install -g webpack")]),e._v(" "),t("p",[e._v("cnpm install -g webpack-cli")]),e._v(" "),t("h5",{attrs:{id:"_3-2、配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、配置文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 3_2、配置文件")]),e._v(" "),t("p",[e._v("默认: webpack.config.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("下包：\n    extract-text-webpack-plugin@next   // 样式的抽离\n\nconst path = require('path');\nconst htmlwebpackplugin = require('html-webpack-plugin'); // 新建html页面\n// 将多个样式表打包为一个样式表\nconst ExtractTexPlugin = require('extract-text-webpack-plugin')  // 样式的抽离\n\nfunction entries(){\n    let temp = {};\n    let pathname = path.join(__dirname,'src');\n    let files = fs.readdirSync(pathname);\n    files.map(file =>{\n        let pathUrl = path.join(pathname,file);\n        ley stats = fs.statSync(pathUrl);\n        if(stats.isFile()){\n            let key = path.basename(pathUrl,'.js');\n            temp[file] = pathUrl;\n        }\n    })\n}\nmodule.exports = {\n    mode:'development',  // 解决警告\n    // 单入口文件\n    entry:path.join(__dirname,'src/app.js'),\n    // 多入口文件\n    // entry:{\n    //   app:path.join(__dirname,'src/app.js'),\n    //   app2:path.join(__dirname,'src/app2.js')\n    // }\n    output:{\n        path:path.join(__dirname,'dist'),\n        filename:'buildle.js'\n    },\n    // webpack文件解析器，用来解析各种loader\n    module:{\n        rules:[\n            {\n                test:/\\.css$/,\n                loader:ExtractTextPlugin.extract({  // 样式的抽离\n                    fallback:'style-loader',\n                    use:'css-loader'\n                })\n            },{\n                test:/\\.(jpg|png|gif)/,\n                loader:'url-loader' \n            },{\n                test:/\\.(sass|scss)$/,\n                loader:[\n                    \"style-loader\",\n                    \"css-loader\",\n                    \"sass-loader\"\n                ]\n            }\n        ]\n    },\n    resolve:{\n        alias:{\n            common:path.join(__dirname,'src/....');\n        }\n    }\n    devServer:{ // 起服务\n        host:\"localhost\",\n        port:8080,\n        contentBase:'.',   // 基准路径  . 根目录 //本地服务器所加载的页面所在的目录\n        overlay:true, // 将错误显示在页面中\n        inline:true, // 当源文件发生改变是自动刷新页面\n        hot:true,   // 模块的热替换\n        stats:'errors-only',  // 只打印错误\n        compress:true  // 当他为true时对所有的服务器资源采用gzip压缩\n        before(app){\n            app.get('/api',(req,res)=>{\n                res.end()\n            }) \n        }\n    }\n    plugins:[\n        new webpack.HotModuleReplacementPlugin(), // 模块的热替换\n        new ExtractTextPlugin('common.css'),  //  common.css 目标目录\n        new HtmlWebpackPlugin({    // 新建html\n            title:\"my first page\",\n            filename:\"index.html\",\n            template:\"./index.html\",\n            inject:true // 默认false,true显示在body中\n            \n        })\n    ],\n    // devtool:\"eval-source-map\"   无map文件\n    devtool:\"cheap-source-map\"  // 有map的压缩文件\n}  \n\n// sass需要两个包\n// node-sass    sass-loader\n")])])]),t("h4",{attrs:{id:"_4、引入-抛出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、引入-抛出","aria-hidden":"true"}},[e._v("#")]),e._v(" 4、引入 抛出")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("引入: \n单：import Utils from './js/app.js'\n多：import {PI,username,test} from './js';\n抛出：\n单：export default utils\n多：export const PI = 3.14;\n多：export let a = 6;\n\n")])])]),t("h4",{attrs:{id:"_5、命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 5、命令")]),e._v(" "),t("p",[e._v("webpack.optimize.commonsChunkPlugin   // 实现多个文件中公共代码的提取")]),e._v(" "),t("p",[e._v("setup()  // 为服务的中间件,可以对请求进行拦截")]),e._v(" "),t("p",[e._v("proxy()  // 用来做代理的，可以将请求代理到别的服务")]),e._v(" "),t("p",[e._v("hot()  // 模块的热加载")]),e._v(" "),t("p",[e._v("contentBase()  // 用来定义静态文件的地址")]),e._v(" "),t("p",[e._v("webpack.ensure()  // 实现文件的懒加载")])])}],!1,null,null,null);s.options.__file="Webpack.md";n.default=s.exports}}]);