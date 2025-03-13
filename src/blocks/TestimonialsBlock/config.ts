import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TestimonialsBlock: Block = {
  slug: 'testimonialsBlock',
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'testimonialList',
      type: 'array',
      fields: [
        {
          name: 'introduceText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: false,
          required: true,
        },
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'role',
          type: 'text',
        },
        {
          name: 'authorAvatar',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
