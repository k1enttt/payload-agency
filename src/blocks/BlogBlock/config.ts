import type { Block } from 'payload'

export const BlogBlock: Block = {
  slug: 'blogBlock',
  interfaceName: 'BlogBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'mainBlog',
      type: 'group',
      label: 'Highlight Blog',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Blog Title',
        },
        {
          name: 'shortDescription',
          type: 'textarea',
          label: 'Short Description',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
      ],
    },
    {
      name: 'blogs',
      type: 'array',
      label: 'Blogs',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Blog Title',
          required: true,
        },
        {
          name: 'shortDescription',
          type: 'textarea',
          label: 'Short Description',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          required: true,
        },
      ],
    },
  ],
}
