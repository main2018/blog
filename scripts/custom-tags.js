hexo.extend.tag.register('link_class', function(args) {
  const [text, url, className] = args;
  return `<a href="${url}" class="${className}">${text}</a>`;
});