module.exports = {
  dest: 'vuepress',
  title: 'KOSIMA',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo-kosima.png' }]
  ],
  serviceWorker: true,
  base: '/kasima/',
  // theme: 'vue',
  themeConfig: {
    repo: 'Jeeying/kasima',
    editLinks: true,
    docsDir: 'algorithm/docs',
    // docsBranch: 'master',
    // navbar: true,
    // searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Sidebar',
            link: '/sidebar/'
          },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/english' },
              { text: 'Other', items: [
                { text: 'Japanese', link: '/language/japanese' },
                { text: 'Spanish', link: '/language/spanish' }
                ]
              }
            ]
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('guide'),
          '/sidebar/': genSidebarConfig('sidebar'),
          '/':  genSidebarConfig('/'),
        }
      },
    }
  }
}

function genSidebarConfig (title) {
  switch(title) {
    case 'guide':
        return [
          '',
          'guideOne',
          'guideTwo'
        ]
        break;
    case 'sidebar':
        return [
          '',
          'sidebarOne',
          'sidebarTwo'
        ]
        break;
    default:
        return [
          '',
          'structure'
        ]
  }
}