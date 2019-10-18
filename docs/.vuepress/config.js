module.exports = {
    title: '个人主页',
    description: '我的博客',
    head: [
        ['link', {rel: 'icon', href: '/logo.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    serviceWorker: true,
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {
                text: '博文',
                items: [
                    {text: 'Android', link: '/android/'},
                    {text: 'ios', link: '/ios/'},
                    {text: 'Web', link: '/web/'}
                ]
            },
            { text: '前端三剑客', items: [
                { text: 'HTML', link: '/html/' },
                { text: 'CSS', link: '/css/' },
                { text: 'JavaScript', link: '/JavaScript/' },
            ]},
            {text: '关于我', link: '/About/'},
            {text: 'Github', link: 'https://github.com/hanxinkuang/myBlog.git'},
        ],
        sidebar: 'auto',
        smoothScroll: true // 页面滚动效果
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@imgUrl': '../img',
            }
        }
    }
};