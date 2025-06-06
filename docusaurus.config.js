// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

import path from "path";
import fs from "fs";

import tailwindPlugin from "./src/plugins/tailwind-config.cjs";

const generateOpenApiPlugins = () => {
  const openapiDir = path.resolve(__dirname, 'src/api');
  const openapiFiles = fs.readdirSync(openapiDir).filter(file => file.endsWith('.yml'));

  const config = openapiFiles.reduce((data, file) => {
    const id = path.basename(file, '.yml');
    data[id] = {
      specPath: path.join(openapiDir, file),
      outputDir: `api-doc/${id}`,
      sidebarOptions: {
        groupPathsBy: 'tag',
      }
    }
    return data;
  }, {});

  const result = [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'api-doc',
      docsPluginId: 'classic',
      config,
    },
  ];
  return result;
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-tw'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      'zh-tw': {
        htmlLang: 'zh-tw',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demo',
        path: 'demo',
        routeBasePath: 'demo',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
        // includeCurrentVersion: false // 資料庫不包含最新的版本
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebarsTutorial.js'),
        // includeCurrentVersion: false // 資料庫不包含最新的版本
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-doc',
        path: 'api-doc',
        routeBasePath: 'api-doc',
        sidebarPath: require.resolve('./sidebarsApiDoc.js'),
        docItemComponent: "@theme/ApiItem" // 使用 theme-openapi-docs 的樣式
      },
    ],
    generateOpenApiPlugins(),
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: "api-doc",
    //     docsPluginId: "classic",
    //     config: {
    //       member: {
    //         specPath: "src/api/member.yml",
    //         outputDir: "api-doc/member",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //         },
    //       },
    //       product: {
    //         specPath: "src/api/product.yml",
    //         outputDir: "api-doc/product",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //         },
    //       },
    //     }
    //   },
    // ]
    tailwindPlugin
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   to: '/blog', label: 'Blog', position: 'left'
          // },
          {
            to: '/demo/intro',
            position: 'left',
            label: 'Demo',
            activeBaseRegex: '/demo/',
          },
          {
            to: '/tutorial/intro',
            position: 'left',
            label: 'Tutorial',
            activeBaseRegex: '/tutorial/'
          },
          {
            to: '/api-doc/member/user-management-api',
            position: 'left',
            label: 'API',
            activeBaseRegex: `/api-doc/`,
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'demo',
            position: 'right',
            className: 'version-dropdown-button',
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'tutorial',
            position: 'right',
            className: 'version-dropdown-button',
          },
          {
            type: 'localeDropdown',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    themes: [
      'docusaurus-theme-openapi-docs',
      [
        '@easyops-cn/docusaurus-search-local',
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,

          // For Docs using Chinese, it is recomended to set:
          language: ['en', 'zh'],
          docsDir: ['demo', 'tutorial'],
          docsRouteBasePath: ['/demo', '/tutorial'],

          // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
          // forceIgnoreNoIndex: true,
        }
      ],
    ],
};

export default config;
