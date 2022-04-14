module.exports = {
  base: '/',
  title: 'DDBOT 文档',
  description: 'DDBOT 文档中心',
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/nprogress': {},
    '@vuepress/active-header-links': {},
    '@vuepress/medium-zoom': {
      selector: 'img',
    },
  },
  themeConfig: {
    repo: 'Sora233/DDBOT-docs',
    repoLabel: '查看源码',
    lastUpdated: '最后更新',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '救救SORA，我来完善此页面！',
    smoothScroll: true,
    sidebar: 'auto',
    displayAllHeaders: true,
    backToHome: "返回首页",
    nav: [
      {text: '主页', link: '/'},
      {text: '命令指南', link: '/guide/'},
      {text: '部署指南', link: '/deploy/'},
      {text: '模板', link: '/template/'},
      {text: '需要帮助？', link: '/help/'}
    ]
  },
}