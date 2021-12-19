module.exports = {
  // title: '灵海科技网络',
  description: "Just playing around",
  base: "/",

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
          { text: "安全", link: "/safety/" },
          { text: "js", link: "/javascript/swiper.md" },
          { text: "面试", link: "/javascript/test.md" },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true, //代码块行号配置
  },
  plugins: [["vuepress-plugin-code-copy", true]],
};
