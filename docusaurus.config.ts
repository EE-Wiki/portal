import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '社区共建，知识开源！',
  tagline: '一个免费开放且持续更新的电子行业相关知识整合站点',
  favicon: 'img/logo-black-48px.png',

  // Set the production url of your site here
  url: 'https://ee-wiki.vantao.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EE-Wiki', // Usually your GitHub org/user name.
  projectName: 'portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ee-wiki/portal/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ee-wiki/portal/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
      id: 'help_wanted',
      content:
        '🚧本站点目前处于起草阶段，欢迎各位访客提出任何积极的建议!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EE-Wiki',
      logo: {
        alt: 'EE-Wiki LOGO',
        src: 'img/eelogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '开始阅读',
        },
        {to: '/blog', label: '站内博客', position: 'left'},
        {
          href: 'https://github.com/ee-wiki/portal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '快速跳转',
          items: [
            {
              label: '引言',
              to: '/docs/intro',
            },
            {
              label: '站内博客',
              to: '/blog',
            },
          ],
        },
        {
          title: '社区相关',
          items: [
            {
              label: '微信公众号',
              to: '/weixin',
            },
            {
              label: 'QQ 交流群',
              href: 'https://jq.qq.com/?_wv=1027&k=ex93ZPGh',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/EE-Wiki',
            },
          ],
        },
        {
          title: '推荐浏览',
          items: [
            {
              label: 'OI Wiki',
              href: 'https://oi-wiki.org/',
            },
            {
              label: '《笨办法学 C》',
              href: 'https://docs.kilvn.com/lcthw-zh/',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 - ${new Date().getFullYear()} 所有贡献者<br>
      除非另作声明，本站内容均遵循 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans">CC BY-SA 4.0</a> 协议。<br>
      <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="by-sa" border="0" width="88">`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
