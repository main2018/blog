<template><div><!--
 * @Author: wangpan pan.wang@ushow.media
 * @Date: 2024-09-26 19:00:27
 * @LastEditors: wangpan pan.wang@ushow.media
 * @LastEditTime: 2024-09-26 19:27:19
 * @FilePath: /blog/docs/posts/sticky2.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<hr>
<p>date: 2024-09-26
category:</p>
<ul>
<li>工程化
tag:</li>
<li>webpack
sticky: 10
lang: zh-CN
title: 页面的标题
description: 页面的描述</li>
</ul>
<hr>
<h1 id="webpack的打包结果分析" tabindex="-1"><a class="header-anchor" href="#webpack的打包结果分析"><span>webpack的打包结果分析</span></a></h1>
<p>main.js单页应用入口文件编译结果简化分析</p>
<!-- more -->
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// imitate webpack build result</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// The module cache</span></span>
<span class="line">  <span class="token keyword">var</span> installedModules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// The require function</span></span>
<span class="line">  <span class="token comment">// 防止nodejs require冲突用__webpack_require</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">__webpack_require</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Check if module is in cache</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// Create a new module (and put it into the cache)</span></span>
<span class="line">    <span class="token keyword">var</span> module <span class="token operator">=</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">i</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Execute the module function</span></span>
<span class="line">    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Flag the module as loaded</span></span>
<span class="line">    module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Return the exports of the module</span></span>
<span class="line">    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">__webpack_require</span><span class="token punctuation">(</span><span class="token string">"./main.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"./main.js"</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> __webpack_require</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// console.log('main.js')</span></span>
<span class="line">    <span class="token comment">// const a = __webpack_require('./a.js')</span></span>
<span class="line">    <span class="token comment">// a.abc()</span></span>
<span class="line">    <span class="token comment">// console.log(a)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 使用eval执行代码，可以设置在控制台看到的打印的文件名</span></span>
<span class="line">    <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"console.log('main.js');\nconst a = __webpack_require('./a.js');\na.abc();\nconsole.log(a);\n\n//# sourceURL=webpack:///./src/main.js;"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"./a.js"</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> __webpack_require</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// console.log('a.js')</span></span>
<span class="line">    <span class="token comment">// exports.a = 'a'</span></span>
<span class="line">    <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"console.log('a.js');exports.a = \"a\"//# sourceURL=webpack:///./src/a.js;"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


