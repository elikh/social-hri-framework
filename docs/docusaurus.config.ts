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
    image: 'img/social-hml-hri-icon.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'human-robot interaction, HRI, social robotics, HML, SOCIAL framework, HRI design patterns, robot architecture, embodied AI, physical AI, foundation models in robotics, LLM robotics, VLM robotics, robot social reasoning, human robot interaction architecture, inspectable AI, explainable robotics, context-aware robotics, adaptive autonomy, social robot design patterns',
      },
      {
        name: 'description',
        content:
          'S.O.C.I.A.L. HML is a pattern language for inspectable, socially governed, modern-AI-compatible Human-Robot Interaction architectures.',
      },
    ],    
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'S.O.C.I.A.L. Framework', // מיתוג שם הפרויקט בבר העליון
      logo: {
        alt: 'S.O.C.I.A.L. Framework Logo',
        src: 'img/social-hml-hri-icon.png', // ודא שקיים קובץ לוגו בתיקיית static/img
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hriSidebar',
          position: 'left',
          label: 'Docs', // שינוי מ-Tutorial ל-Docs
        },
        {
          to: '/docs/about',
          label: 'About',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1.25rem; align-items:center;">
          <span>© ${new Date().getFullYear()} S.O.C.I.A.L. HML Framework</span>
          <a href="/social-hri-framework/docs/hml/hml-overview">HML Overview</a>
          <a href="/social-hri-framework/docs/design-patterns/design-patterns-overview">Design Patterns</a>
          <a href="/social-hri-framework/docs/modern-ai/modern-ai-integration-overview">Modern AI Integration</a>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;