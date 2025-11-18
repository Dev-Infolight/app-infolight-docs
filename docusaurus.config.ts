import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Infolight Docs',
  tagline: 'Documentação oficial do aplicativo infolight',
  favicon: 'img/infolight-logo.svg',
  trailingSlash: false,

  future: {
    v4: true, 
  },
  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['pt'] // language codes
  }]],
  url: 'https://docs.infolight.com.br',
  baseUrl: '/',
  organizationName: 'Dev-Infolight',
  projectName: 'app-infolight-docs', 
  onBrokenLinks: 'throw',
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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
    },
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
              to: 'docs/introducao',
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
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
