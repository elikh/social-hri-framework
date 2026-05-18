import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'S.O.C.I.A.L. Framework',
  tagline: 'Transparent Hybrid HRI Architectures for the VLA Era',
  url: 'https://elikh.github.io', 
  baseUrl: '/social-hri-framework/', 
  organizationName: 'elikh', 
  projectName: 'social-hri-framework', 
  trailingSlash: false, // מומלץ מאוד עבור GitHub Pages למניעת בעיות ניתוב
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false, // מושבת בהתאם לבקשתך
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'S.O.C.I.A.L. Framework', // מיתוג שם הפרויקט בבר העליון
      logo: {
        alt: 'S.O.C.I.A.L. Framework Logo',
        src: 'img/logo.svg', // ודא שקיים קובץ לוגו בתיקיית static/img
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hriSidebar',
          position: 'left',
          label: 'Docs', // שינוי מ-Tutorial ל-Docs
        },
        {
          href: 'https://github.com/elikh/social-hri-framework', // קישור ל-Repo האמיתי שלך
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/elikh/social-hri-framework/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/elikh/social-hri-framework',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eli. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;