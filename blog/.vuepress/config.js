module.exports = {
    title: 'Shinning Finger',
    description: 'Shinning Like Star',

    // 网站根路径
    base: '/',
    markdown: {
        lineNumbers: true // 在代码左侧显示行号
    },

    // 主题配置
    themeConfig: {
        // 禁用导航栏: 为false时，导航栏不再显示 
        navbar: true,
        // 显示所有页面的标题链接 
        displayAllHeaders: true,

        // 显示最后一次更新时间
        lastUpdated: 'Last Update',

        // 显示上一页跳转链接
        prev: true,
        next: true,

        // 启用页滚动效果
        smoothScroll: true,
        // 导航栏链接 
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' },
            { text: 'External', link: 'https://www.baidu.com' },
            {
                // 链接列表， 其中text为显示内容, 列表可以多级嵌套
                text: 'Languages', ariaLable: 'Language Label', items: [
                    /* {
                        text: 'Home', link: '/', items: [
                            { text: 'Home', link: '/' },
                            { text: 'Home', link: '/' }
                        ]
                    }, */
                    { text: 'English', link: 'https://www.baidu.com' },
                ]
            },
        ],
        // 侧边栏链接，默认其标题显示为其文章的标题
        sidebar: [
            {
                title: 'c',
                path: '/c/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/c/1'
                ]
            },
            {
                title: 'js',
                path: '/js/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/js/1'
                ]
            },
            {
                title: 'java',
                path: '/java/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'c#',
                path: '/c#/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'c++',
                path: '/c++/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'English',
                path: '/English/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'Japanese',
                path: '/Japanese/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'unity',
                path: '/unity/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'else',
                path: '/else/',
                collapsable: true, // 是否可以折叠
                // sidebarDepth: 1,
                children: [
                    ''
                ]
            },
            
        ]
    }

}