export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "posts_sticky2.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"webpack的打包结果分析","author":"","date":null,"category":[],"tag":[],"excerpt":"<!--\n * @Author: wangpan pan.wang@ushow.media\n * @Date: 2024-09-26 19:00:27\n * @LastEditors: wangpan pan.wang@ushow.media\n * @LastEditTime: 2024-09-26 19:27:19\n * @FilePath: /blog/docs/posts/sticky2.md\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n-->\n<hr>\n<p>date: 2024-09-26\ncategory:</p>\n<ul>\n<li>工程化\ntag:</li>\n<li>webpack\nsticky: 10\nlang: zh-CN\ntitle: 页面的标题\ndescription: 页面的描述</li>\n</ul>\n<hr>\n<h1>webpack的打包结果分析</h1>\n<p>main.js单页应用入口文件编译结果简化分析</p>\n"},"title":"webpack的打包结果分析"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
  ["/webpack/analysis.html", { loader: () => import(/* webpackChunkName: "webpack_analysis.html" */"/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/webpack/analysis.html.js"), meta: {"title":"webpack的打包结果分析"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
