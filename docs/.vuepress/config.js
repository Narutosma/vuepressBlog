module.exports = {
  title: 'L\'s blog',
  description: 'my personal blog',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  base: '/',
  markdown: {
    lineNumber: false
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'x', link: '/acc/' },
      { text: 'xx', link: '/accc/' },
      { text: 'xxx', link: '/acccc/' }
    ],
    sidebar: [
      {
        title: 'x',
        collapsable: false,
        children: ['/test/cs']
      }
    ],
    sidebarDepth: 2
  }
}