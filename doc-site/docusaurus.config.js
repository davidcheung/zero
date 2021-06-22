/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zero',
  tagline: 'Zero sets up everything you need so you can immediately start building your product',
  url: 'https://docs.zero-david.online',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'commitdev',
  projectName: 'zero',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      logo: {
        alt: 'Zero Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs/zero/about/overview',
          label: 'Docs',
          position: 'right'
        },
        {
          href: 'https://github.com/commitdev/zero',
          className: 'header-github-link header-logo-32',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Slack',
              href: 'https://slack.getzero.dev'
            },
            {
              label: 'Blog',
              href: 'https://commit.dev/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Commit.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: 'docs/zero/',
          include: ['**/*.md'],
          // editUrl: 'https://github.com/commitdev/zero/blob/main/doc-site/',
          editUrl: 'https://github.com/commitdev/zero/blob/doc-site/doc-site/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        debug: true,
      },
    ],
  ],
  plugins: []
};
