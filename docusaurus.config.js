module.exports = {
  title: "スモコン指南書",
  tagline: "すべてのコンボ厨のために",
  url: "https://combo-guide.now.sh",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ikarino", // Usually your GitHub org/user name.
  projectName: "combo-guide", // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-65394400-2"
    },
    navbar: {
      title: "ホーム",
      logo: {
        alt: "My Site Logo",
        // src: 'img/logo.svg',
        src: "img/cg.png"
      },
      links: [
        { to: "docs/floor/title", label: "指南書", position: "left" },
        { to: "blog", label: "追加記事", position: "left" },
        {
          href: "https://web-gscs.firebaseapp.com",
          label: "web-gscs",
          position: "left"
        }
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "指南書",
          items: [
            {
              label: "階層別攻略",
              to: "docs/floor/title"
            },
            {
              label: "コンボTIPS",
              to: "docs/combo/title"
            },
            {
              label: "アイテム",
              to: "docs/item/title"
            },
            {
              label: "心の章",
              to: "docs/heart/title"
            },
            {
              label: "参考資料",
              to: "docs/appendix/title"
            }
          ]
        },
        {
          title: "アプリ",
          items: [
            {
              label: "web-gscs",
              href: "https://web-gscs.firebaseapp.com"
            },
            {
              label: "草",
              to: "kusa"
            },
            {
              label: "水がめループシミュレータ",
              to: "mizugameLoop"
            },
            {
              label: "解析データ",
              to: "kaiseki"
            } // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
          ]
        },
        {
          title: "Social",
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/ikarino/combo-guide"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Anchor_Gmkz"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 怒りの葡萄.`
    },
    algolia: {
      apiKey: "3643261c6d11b9dbc36c19aeb7c765fe",
      indexName: "ikarino_combo-guide",
      algoliaOptions: {} // Optional, if provided by Algolia
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ikarino/combo-guide/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
