---
title: Hexo博客框架入门
categories:
  - 教程
tags:
  - 教程
date: 2025-05-18 14:57:49
---
翻译自 [Hexo 博客框架入门](https://www.cgmartin.com/2016/01/03/getting-started-with-hexo-blog/)
第一次使用Hexo 框架写博客？本教程将指导您安装 Hexo、运行本地服务器以及创建您的第一篇博客文章。

安装 Hexo CLI
要求
您需要安装Node.js和Git作为先决条件。

使用 Node.js 包管理器 (NPM) 全局安装 Hexo 命令行界面 (CLI)：

$ npm install -g hexo-cli
...安装完成后，使用hexo init命令创建一个新的博客项目：

$ hexo init my-blog && cd my-blog
此步骤可能需要几分钟，因为它会为您的网站创建初始文件结构并下载其他 Node.js 依赖项。

启动服务器
要在浏览器中查看新创建的站点，请启动本地服务器：

$ hexo server --draft --open

INFO  Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.
没有用？
您当前的工作目录必须位于my-blog项目文件夹中，否则服务器将无法启动。

这将启动服务器并提供一些额外的选项：

--draft：启用可查看的“草稿”帖子（默认情况下，草稿是隐藏的）
--open：在浏览器中打开本地网站
浏览器应该会弹出并显示默认的博客网站以及预制的“Hello World”帖子。

创作时，您需要让服务器在终端中保持运行。服务器进程将监视 Markdown 源文件的更改，并自动生成新的 HTML 文件。服务器的控制台日志输出也有助于排查您可能遇到的错误。

小心
请注意，某些操作需要重新启动服务器：

编辑项目的_config.yml
安装或更新 Hexo 插件npm
scripts对文件夹内的本地插件进行更改
由于大部分创作时间都花在 Markdown 文件中，因此不需要经常进行硬重启。

创建您的第一篇帖子
开始新帖子时，最好使用“草稿”功能。默认情况下，草稿不会发布，因此您可以自由修改其他帖子，同时保持未完成的草稿不公开。

使用以下命令创建新的草稿帖子hexo new draft：

$ hexo new draft "My First Blog Post"
# creates -> ./source/_drafts/My-First-Blog-Post.md
提示
使用该命令时，除了“draft”模板外，还可以使用其他模板hexo new。查看该./scaffolds/文件夹并阅读Hexo Scaffolds 文档以获取更多信息。

要编辑草稿，请导航到./source/_drafts/My-First-Blog-Post.md您最喜欢的 Markdown 编辑器并打开该文件。

让我们为您的新帖子添加一个副标题和一些段落内容……

---
title: My First Blog Post
tags:
---
## Hello there
This is some content.
提示
---Markdown 文件顶部两个破折号之间的内容称为“front-matter”。它是 Hexo 和当前主题使用的元数据。有关更多信息，请参阅Hexo 文档中的 Front-Matter 。

警告
确保页面的 Markdown 内容位于前置破折号下方，---否则内容将不会显示（并且您可能会YAMLException在服务器输出中看到错误）。

保存对 Markdown 文件的更改将被运行自动检测hexo server并重新生成为静态 HTML 文件，但您必须刷新浏览器才能查看更改。

您的帖子在浏览器中应该看起来像这样：

第一篇博客文章的截图
第一篇博客文章的截图

如果您不喜欢每次都手动刷新浏览器，hexo-livereload或hexo-browsersync插件可以自动完成。

安装hexo-browsersync插件（我个人最喜欢的）：

$ npm install hexo-browsersync --save
$ hexo server --draft --open  # restart the server
提示
其他Hexo 插件也可以通过同样的方式使用 轻松安装npm。

许多插件的配置都可以在项目_config.yml文件中进行修改。您需要查阅每个插件的文档来了解其具体的配置属性。

在这种情况下hexo-browsersync，默认设置可以正常工作，不需要编辑_config.yml文件。

在列表中显示摘要摘录
假设您有一篇很长的文章，并且不喜欢将整篇文章显示在列表页面上......

您可以在 Markdown 中标记一个位置，将<!-- more -->其从列表页面中隐藏。该位置将被替换为“阅读更多”链接，该链接可打开文章的其余内容。

---
title: My First Blog Post
tags:
---
This is a summary of the post.
<!-- more -->
## Hello there
This is some content.
插入图像
图片和其他资源文件可以放在该./source/文件夹下的子目录中。请使用维基百科上的这张A 特遣队原图进行测试。下载并保存到以下路径：

./source/images/Ateam.jpg
编辑您的原始帖子，插入带有以下引用的 markdown 图像链接/images/Ateam.jpg：

---
title: My First Blog Post
tags:
---
## Hello there
This is some content.

![I love it when a plan comes together.](/images/Ateam.jpg)
您应该在浏览器中看到类似这样的内容：

第一篇博客文章的屏幕截图（带图片）
第一篇博客文章的屏幕截图（带图片）

提示
您还可以将资源文件按每个帖子的文件夹进行组织。这需要post_asset_folder: true在 中启用该设置_config.yml，并了解其相对路径的引用行为。有关更多信息，请参阅Hexo 文档中的资源文件夹。

发布草稿
当需要将草稿移至“实时”帖子以供所有人查看时，请使用以下hexo publish命令：

$ hexo publish My-First-Blog-Post
运行此命令时会发生一些事情：

markdown 文件My-First-Blog-Post.md从 移动./source/_drafts/到./source/_posts。
该文件的“前言”发生变化，包括发布日期：

---
title: My First Blog Post
date: 2015-12-30 00:53:15  # <-
tags:
---
...
最后，准备部署整个站点。运行以下hexo generate命令：

$ hexo generate
# generates -> ./public/
运行网站所需的所有内容都将放在该./public文件夹中。您已准备好将此文件夹传输到您的公共 Web 服务器或 CDN。

后续步骤Next steps
现在您已经了解了一般的工作流程，接下来可以探索一些增强网站的其他方法：

使用Git提交更改，以便在出现问题时可以随时恢复到正常状态。阅读jr0cket 的指南，了解如何使用 Git 和 Github 管理您的 Hexo 网站。
使用文件内的各种配置设置定制您的博客_config.yml。
通过命令自动部署到 GitHub Pages、Heroku、Amazon S3 和其他提供商hexo deploy。
使用内置标签插件增强文章的风格和功能。
浏览不断增长的社区 Hexo 插件目录。
重新配置默认的 Hexo“风景”主题，尝试一些其他可用的免费主题，或者创建您自己的主题。
将您的旧帖子从其他博客系统（Wordpress、Jekyll、Octopress 等）迁移到 Hexo。
获取帮助
如果您在命令行中迷失了方向，只需输入hexo可用命令的列表：

$ hexo
Usage: hexo <command>

Commands:
  clean     Removed generated files and cache.
  config    Get or set configurations.
  deploy    Deploy your website.
  generate  Generate static files.
  help      Get help on a command.
  init      Create a new Hexo folder.
  list      List the information of the site
  migrate   Migrate your site from other system to Hexo.
  new       Create a new post.
  publish   Moves a draft post from _drafts to _posts folder.
  render    Render files with renderer plugins.
  server    Start the server.
  version   Display version information.
  ...
要查看特定命令的选项，请使用hexo help {command}：

$ hexo help new
$ hexo help server
