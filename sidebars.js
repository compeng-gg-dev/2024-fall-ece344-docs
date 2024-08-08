/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

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
        title: '2024 Fall ECE344 Labs',
        slug: '/',
      },
      items: [
        'lab1',
        'lab2',
        'lab3',
        'lab4',
        'lab5',
        'lab6',
      ],
    },
  ],
};

export default sidebars;
