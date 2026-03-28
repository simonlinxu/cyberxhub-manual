import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CYBERXHUB",
  description: "Cybersecurity Learning Center",
  lastUpdated: true,
  cleanUrls: true,

  // 核心：英德双语切换配置
  locales: {
    root: { label: 'English', lang: 'en' },
    de: { label: 'Deutsch', lang: 'de', link: '/de/' }
  },

  themeConfig: {
    // 搜索功能
    search: { provider: 'local' },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/simonlinxu/cyberxhub-manual' }
    ],

    // 英文版配置
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Academy', link: '/academy/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'User Manual',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        }
      ]
    }
  }
})
