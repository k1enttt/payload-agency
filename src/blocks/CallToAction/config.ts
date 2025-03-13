import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'ctaList',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'headingText',
          type: 'text',
        },
        {
          name: 'demoLink',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'techStack',
          type: 'array',
          fields: [
            {
              name: 'techLogo',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'layout',
          type: 'select',
          options: [
            {
              label: 'Text and Image',
              value: 'text-image',
            },
            {
              label: 'Image and Text',
              value: 'image-text',
            },
          ],
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
