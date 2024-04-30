import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  bundler: viteBundler(), // vite
  lang: 'zh-CN', // zh-CN | en-US
  public: 'docs/public', // public dir
  title: '有兽焉粉丝服务器帮助中心', // title
  description: '有兽焉 Minecraft Java 国际版粉丝服务器', // description
  theme: hopeTheme({
    favicon: '/images/logo.png',
    displayFooter: true,
    home: '/', // home page
    repo: 'RegadPoleCN/PlumBot-doc',
    editLink: true, // true | false
    //editLinkText: '在Github编辑此页', // edit link text
    docsRepo: 'https://github.com/RegadPoleCN/PlumBot-doc',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    backToHome: '返回首页', // back to home page text
    contributors: true, // true | false
    openInNewWindow: '在新窗口打开', // open in new window text
    logo: '/images/logo.png', //这个皮皮好可爱（
    // smoothScroll: true,
    hotReload: true,  //DEBUG ONLY!!!!!
    iconAssets: "iconfont",

    sidebarDepth: 2, // 侧边栏显示2级

    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
        codetabs: true,
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
        tasklist: true,
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        footnote: true,
        demo: true,
        alert: true,
      },
      copyCode: {}, // 复制代码插件
    },
  }),

  plugins: [
    shikiPlugin({
      // 配置项
      langs: [
        'ts',
        'json', 
        'vue',
        'md',
        'bash',
        'diff',
        'python',
        'yaml',
        'batch',
        'cmd',
        'java',
        'powershell'
      ],
    }),
  ],
})