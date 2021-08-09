export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61115a6dde851d08849b26fa',
                  title: 'Sanity Studio',
                  name: 'nextjs-sanity-testing-studio-3b4k4pa2',
                  apiId: '27f4e6b3-ee2e-4bd7-b71d-ae9dce510a7b'
                },
                {
                  buildHookId: '61115a6dd477e60816fa2bf5',
                  title: 'Landing pages Website',
                  name: 'nextjs-sanity-testing-web',
                  apiId: '8c3cfb14-da30-4bcc-8bbb-f1b367bbc391'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webdevike/nextjs-sanity-testing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-sanity-testing-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
