import comp from "/Users/wangpan/Test/blog/docs/.vuepress/.temp/pages/category/工程化/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/%E5%B7%A5%E7%A8%8B%E5%8C%96/\",\"title\":\"Category 工程化\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category 工程化\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"工程化\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
