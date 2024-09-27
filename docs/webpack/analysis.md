<!--
 * @Author: wangpan pan.wang@ushow.media
 * @Date: 2024-09-26 19:00:27
 * @LastEditors: wangpan pan.wang@ushow.media
 * @LastEditTime: 2024-09-26 19:27:19
 * @FilePath: /blog/docs/posts/sticky2.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
---
date: 2024-09-26
category:
  - 工程化
tag:
  - webpack
sticky: 10
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

# webpack的打包结果分析

main.js单页应用入口文件编译结果简化分析

<!-- more -->
``` javascript
// imitate webpack build result
(function(modules) {
  // The module cache
  var installedModules = {};

  // The require function
  // 防止nodejs require冲突用__webpack_require
  function __webpack_require(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }
  __webpack_require("./main.js");
})({
  "./main.js": function(module, exports, __webpack_require) {
    // console.log('main.js')
    // const a = __webpack_require('./a.js')
    // a.abc()
    // console.log(a)

    // 使用eval执行代码，可以设置在控制台看到的打印的文件名
    eval("console.log('main.js');\nconst a = __webpack_require('./a.js');\na.abc();\nconsole.log(a);\n\n//# sourceURL=webpack:///./src/main.js;")
  },
  "./a.js": function(module, exports, __webpack_require) {
    // console.log('a.js')
    // exports.a = 'a'
    eval("console.log('a.js');exports.a = \"a\"//# sourceURL=webpack:///./src/a.js;")
  }
})
```
