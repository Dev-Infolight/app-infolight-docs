import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Infolight Docs',
  tagline: 'Documentação oficial do aplicativo infolight',
  favicon: 'img/infolight-logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'INFOLIGHT TECNOLOGIA DA INFORMACAO LTDA', // Usually your GitHub org/user name.
  projectName: 'app-infolight-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Infolight',
        src: 'img/infolight-black.svg',
        srcDark: 'img/infolight-white.svg',
        href: "/",
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          type: "dropdown",
          label: "Onde baixar o aplicativo ?",
          position: 'left',
          items: [
            {
              label: "PlayStore",
              href: "https://play.google.com/store/apps/details?id=br.com.infolight.mobile",
            },
            {
              label: "Apple Store",
              href: "https://apps.apple.com/br/app/infolight/id6743130204",
            }
          ]
        }
      ],
    },
    footer: {
       logo: {
        alt: 'Infolight',
        src: 'img/infolight-black.svg',
        srcDark: 'img/infolight-white.svg',

        height: 30,
      },
      links: [
        {
          title: 'Guia',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Onde baixar o aplicativo ?',
          items: [
            {
              label: "PlayStore",
              href: "https://play.google.com/store/apps/details?id=br.com.infolight.mobile",
            },
            {
              label: "Apple Store",
              href: "https://apps.apple.com/br/app/infolight/id6743130204",
            }
          ],
        },
        {
          title: 'Mais',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'Infolight',
              href: 'https://infolight.com.br/',
            },
             {
              label: 'Instagram',
              href: 'https://www.instagram.com/infolighterp/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Infolight. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
