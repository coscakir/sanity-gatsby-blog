export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd9f7929a2cdedd76675a07',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-w8bsfp4t',
                  apiId: '0e8136a8-26ee-4a4d-b0cb-29c06e4ef953'
                },
                {
                  buildHookId: '5fd9f7921fb55dbbf1d82a43',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fhcazkpr',
                  apiId: 'a32ecf3f-0415-4d33-a5ac-a3bb667eb2e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coscakir/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fhcazkpr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
