/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DrawJS",
  tagline: "Vector graphics for modern web browsers",
  url: "https://thesabbir.github.io/drawjs",
  baseUrl: "/drawjs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thesabbir", // Usually your GitHub org/user name.
  projectName: "drawjs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "DrawJS",
      // logo: {
      //   alt: "DrawJS Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "Docs",
          position: "right",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/thesabbir/drawjs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Get Started",
          items: [
            {
              label: "Docs",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/drawjs",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/thesabbir/drawjs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig.json",
        out: "api",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/thesabbir/drawjs/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/thesabbir/drawjs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
