hexo.extend.tag.register('link_class', function(args) {
  const [text, url, className] = args;
  return `<a href="${url}" class="${className}">${text}</a>`;
});
hexo.extend.tag.register('html', function(args) {
  const [html] = args;

  const root = hexo.config.root || '/';
  const normalizedRoot = root.endsWith('/') ? root.slice(0, -1) : root;

  const newHtml = html.replace(/(href|src)=['"]\/(.*?)['"]/g, (match, attr, path) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // 获取匹配的引号，注意这里用match来截取了引号
    const quote = match.includes(`'`) ? `'` : `"`;
    return `${attr}=${quote}${normalizedRoot}/${cleanPath}${quote}`;
  });
  return newHtml
});