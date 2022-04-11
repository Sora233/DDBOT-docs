module.exports = {
  base: '/',
  title: 'DDBOT 文档',
  description: 'DDBOT 文档中心',
  themeConfig: {
    repo: 'Sora233/DDBOT-docs',
    repoLabel: '查看源码',
    lastUpdated: '最后更新',
    editLinks: true,
    editLinkText: '发现问题，救救SORA，我来改正此页面！',
    smoothScroll: true,
    sidebar: 'auto',
    displayAllHeaders: true,
    tip: "提示",
    warning: "注意",
    danger: "警告",
    backToHome: "返回首页",
    nav: [
      {text: '主页', link: '/'},
      {text: '命令指南', link: '/guide/'},
      {text: '部署指南', link: '/deploy/'},
      {text: '模板', link: '/template/'},
    ]
  }
}