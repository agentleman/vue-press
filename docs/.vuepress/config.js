module.exports = {
  title: '灵海科技网络',
  description: 'Just playing around',
  base: "/vue-press/",

  themeConfig: {
    navbar: true,
    // theme: 'vuepress-theme-note',
    // theme:'antdocs',
    theme: '@vuepress/blog',

    nav: [
      { text: "首页", link: "/" },

      {
        text: "前端",
        ariaLabel: "External Menu",
        items: [
          { text: "Chinese", link: "/guide/" },
          { text: "Japanese", link: "/language/japanese/" },
        ],
      },
      // { text: "NodeJS", link: "/node/" },
      // { text: "数据库", link: "/guide/" },
      // { text: "服务器", link: "/guide/" },
      // { text: "计算机基础", link: "/guide/" },

    ],
    // sidebar: [
    //     '/',
    //     '/page-a',
    //     ['/page-b', 'Explicit link text']
    // ]
    // sidebar: 'auto'
  },
  markdown: {
    lineNumbers: true,//代码块行号配置
  }
};