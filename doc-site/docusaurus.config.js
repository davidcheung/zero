/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zero',
  tagline: 'Zero sets up everything you need so you can immediately start building your product',
  url: 'https://docs.getzero.dev',
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
          label: 'Documentation',
          position: 'right'
        },
        {
          href: 'https://github.com/commitdev/zero',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Zero',
          items: [
            {
              label: 'Zero CLI',
              to: 'https://github.com/commitdev/zero',
            },
            {
              label: 'AWS EKS stack',
              to: 'https://github.com/commitdev/zero-aws-eks-stack',
            },
            {
              label: 'Frontend - React',
              to: 'https://github.com/commitdev/zero-deployable-react-frontend',
            },
            {
              label: 'Backend - golang',
              to: 'https://github.com/commitdev/zero-deployable-backend',
            },
            {
              label: 'Backend - Node.js',
              to: 'https://github.com/commitdev/zero-deployable-node-backend',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://commitzero.slack.com'
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/commitdev/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.commit.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/commitdev/zero',
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
