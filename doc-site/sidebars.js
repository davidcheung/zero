module.exports = {
  zero: [{
      "About": [{
        type: 'autogenerated',
        dirName: 'about',
      }],
      "Getting started": [{
        type: 'autogenerated',
        dirName: 'getting-started',
      }],
      "Reference": [{
        type: 'autogenerated',
        dirName: 'reference',
      }],
    
      "Concepts": [{
        type: 'autogenerated',
        dirName: 'concepts',
      }],
  },
  {
    type: 'category',
    label: 'Modules',
    collapsed: false,
    items: [
      {
        type: 'link',
        label: 'AWS EKS Stack',
        href: '/docs/modules/aws-eks-stack',
      },
      {
        type: 'link',
        label: 'Frontend',
        href: '/docs/modules/frontend',
      },
      {
        type: 'link',
        label: 'Backend',
        href: '/docs/modules/backend',
      }
    ]
  }]
}

