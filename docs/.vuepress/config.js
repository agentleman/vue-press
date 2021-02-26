module.exports = {
    themeConfig: {
        navbar: true,
        base:"/vue-press/",
        logo: '/assets/img/logo.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'External',
                ariaLabel: 'External Menu',
                items: [
                    { text: 'Chinese', link: '/guide/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
        ],
        // sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text']
        // ]
        // sidebar: 'auto'
    }
}