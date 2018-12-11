(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{191:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),e("p",[t._v("请查阅 "),e("router-link",{attrs:{to:"./../config/"}},[t._v("配置参考")]),t._v(" 以获取完整的选项列表。")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("VuePress 主题，负责网站的所有布局和交互细节。VuePress 附带一个默认主题（你现在看到的就是），专门为技术文档设计。它暴露许多选项，允许你自定义导航栏(navbar)、侧边栏(sidebar)和主页(homepage)等。详细信息请查看 "),e("router-link",{attrs:{to:"./../default-theme-config/"}},[t._v("默认主题配置")]),t._v(" 页面。")],1),t._v(" "),e("p",[t._v("如果你想开发自定义主题，请参考 "),e("router-link",{attrs:{to:"./custom-themes.html"}},[t._v("自定义主题")]),t._v("。")],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置文件-config-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-config-file","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置文件(config file)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不做任何配置的话，页面会显得过于简单，用户也无法方便地浏览网站。想要定制你的网站，首先需要在文档目录中创建一个 "),s("code",[this._v(".vuepress")]),this._v(" 目录。这是放置所有 VuePress 特有(VuePress-specific) 文件的地方。你的项目结构可能长这样：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("配置 VuePress 站点的基本文件是 "),s("code",[this._v(".vuepress/config.js")]),this._v("，其中导出一个 JavaScript 对象：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Hello VuePress'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Just playing around'")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果开发服务器正常运行，你应该看到该页面现在有一个 title 标题和一个搜索框。VuePress 带有内置的 基于 header 搜索(headers-based search) 的功能 - 它会自动从所有页面的 title, "),s("code",[this._v("h2")]),this._v(" 和 "),s("code",[this._v("h3")]),this._v(" header 标签中，建立一个简单的搜索索引。（译者注：此搜索是遍历 pages 数组的每一项，取出其中的 headers 数组，其中数组每项对应 markdown 标题，具体代码查看 /lib/default-theme/SearchBox.vue 的 suggestions 函数）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("可替代的配置格式")]),this._v(" "),s("p",[this._v("你也可以使用 YAML("),s("code",[this._v(".vuepress/config.yml")]),this._v(") 或 TOML("),s("code",[this._v(".vuepress/config.toml")]),this._v(") 格式编写配置文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"主题配置-theme-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置-theme-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" 主题配置(theme configuration)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"应用程序级别的增强功能-app-level-enhancements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用程序级别的增强功能-app-level-enhancements","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用程序级别的增强功能(app level enhancements)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于 VuePress 应用是一个标准的 Vue 应用程序，所以你可以通过创建一个 "),s("code",[this._v(".vuepress/enhanceApp.js")]),this._v(" 文件，来使用应用程序级别的增强功能，如果此文件存在，该文件将会被导入到该应用程序中。该文件应该通过  "),s("code",[this._v("export default")]),this._v(" 方式导出一个钩子函数，它将接收一个含有一些应用程序级别值的对象作为参数。你可以使用这个钩子来安装额外的 Vue 插件，注册全局组件，或者添加额外的路由钩子：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 当前 VuePress 应用所使用的 Vue 版本")]),t._v("\n  options"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 根 Vue 实例的选项")]),t._v("\n  router"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 应用程序的路由实例")]),t._v("\n  siteData "),e("span",{attrs:{class:"token comment"}},[t._v("// 网站元数据")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...使用应用程序级别的增强功能")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="basic-config.md";s.default=n.exports}}]);