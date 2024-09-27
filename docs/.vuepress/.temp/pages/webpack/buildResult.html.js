import comp from "/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/webpack/buildResult.html.vue"
const data = JSON.parse("{\"path\":\"/webpack/buildResult.html\",\"title\":\"webpack的打包结果分析\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"webpack/buildResult.md\",\"excerpt\":\"<!--\\n * @Author: wangpan pan.wang@ushow.media\\n * @Date: 2024-09-26 19:00:27\\n * @LastEditors: wangpan pan.wang@ushow.media\\n * @LastEditTime: 2024-09-26 19:27:19\\n * @FilePath: /blog/docs/posts/sticky2.md\\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\\n-->\\n<hr>\\n<p>date: 2024-09-26\\ncategory:</p>\\n<ul>\\n<li>工程化\\ntag:</li>\\n<li>webpack\\nsticky: 10\\nlang: zh-CN\\ntitle: 页面的标题\\ndescription: 页面的描述</li>\\n</ul>\\n<hr>\\n<h1>webpack的打包结果分析</h1>\\n<p>main.js单页应用入口文件编译结果简化分析</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
