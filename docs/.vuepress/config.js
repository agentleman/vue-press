module.exports = {
  // title: '灵海科技网络',
  description: "Just playing around",
  base: "/vue-press/",

  themeConfig: {
    navbar: true,
    // theme: 'vuepress-theme-note',
    // theme:'antdocs',
    theme: "awesome",

    nav: [
      { text: "首页", link: "/" },

      {
        text: "前端",
        ariaLabel: "External Menu",
        items: [
          { text: "model", link: "/guide/" },
          { text: "docs", link: "/Docs/" },
          { text: "git", link: "/git/" },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true, //代码块行号配置
  },
  plugins: [["vuepress-plugin-code-copy", true]],
};
