module.exports = {
  base: '/vue-press/', // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它
  title: 'vuepress manage', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
  ga: 'UA-120533817-1',
  description: 'my day manage with vuepress', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [ // 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  host: 'localhost',
  port: 8080,
  dest: 'docs/.vuepress/dist',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    repo: 'fallenaAngel/vue-press',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '错别字纠正',
    sidebarDepth: 3,
    sidebar: {
      '/remark/': [
        {
          title: '备注',
          children: [
            '',
            'mark1'
          ]
        }
      ]
    }
  },
  evergreen: true // 如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 true，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积
}