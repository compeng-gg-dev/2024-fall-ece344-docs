// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    'setup',
    {
      type: 'category',
      label: 'Labs',
      link: {
        type: 'generated-index',
        title: '2024 Fall ECE344',
        slug: '/',
      },
      items: [
        'lab1',
      ],
    },
  ],
};

export default sidebars;
