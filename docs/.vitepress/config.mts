import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Navigation",
  description: "同济大学资源导航系统",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/other-tools' }
    ],

    sidebar: [
      {
        text: '总',
        items: [
          { text: '快速开始', link: '/quick-start' },
          { text: '官方网站', link: '/tongji-web' },
          { text: '其它工具', link: '/other-tools' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tongji-Useful-Tools/Navigation' }
    ]
  },
  base: '/Navigation/'
})
