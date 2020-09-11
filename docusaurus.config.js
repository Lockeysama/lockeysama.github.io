const versions = require('./versions.json');

module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://lockeysama.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Lockeysama', // Usually your GitHub org/user name.
  projectName: 'lockeysama.github.io', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "0797d5513a4961659b3f15828b64f261",
      indexName: "amphoradata",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: `${versions[0]}(Latest)`,
              to: 'docs/',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `docs/${version}/`,
            }))
          ]
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          label: 'SDKs',
          position: 'right',
          items: [
            {
              label: '安卓',
              href: 'https://github.com/Entertech/Enter-Biomodule-Demo-Android',
            },
            {
              label: 'iOS',
              href: 'https://github.com/Entertech/Enter-Biomodule-BLE-iOS-SDK',
            }
          ]
        },
        {
          href: 'https://lockeysama.github.io/docs-test.blog.com/',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://lockeysama.github.io/docs-test.blog.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://lockeysama.github.io/docs-test.blog.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://lockeysama.github.io/docs-test.blog.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
