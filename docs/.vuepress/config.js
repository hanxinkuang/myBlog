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
            {text: '关于我', link: '/about/'},
            {text: 'Github', link: 'https://www.github.com/codeteenager'},
        ],
        sidebar: {
            '/Home/': [
                '/Home/', // Home文件夹的README.md 不是下拉框形式
                {
                    title: '侧边栏下拉框的标题1',
                    children: [
                        '/Home/Home', // 以docs为根目录来查找文件
                        // 上面地址查找的是：docs>Home>Home.md 文件
                        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                }
            ]
        }
    }
};