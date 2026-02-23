// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syncor Documentation',
  tagline: 'Everything your team needs to use Syncor',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.syncor.io',
  baseUrl: '/',

  organizationName: 'jackie-codecraft',
  projectName: 'syncor-docs',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Netlify Identity widget — required for CMS login redirect to work
  scripts: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/jackie-codecraft/syncor-docs/tree/main/',
          routeBasePath: 'docs',
        },
        blog: false, // Disable the blog plugin — docs only
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Syncor Docs',
        logo: {
          alt: 'Syncor Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/jackie-codecraft/syncor-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/intro',
              },
              {
                label: 'Procurement',
                to: '/docs/procurement/placing-orders',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jackie-codecraft/syncor-docs',
              },
              {
                label: 'Content Manager',
                href: '/admin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Syncor. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
