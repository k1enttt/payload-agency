import type { Block } from 'payload'

export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  fields: [
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'addresses',
      type: 'array',
      label: 'Addresses',
      fields: [
        {
          name: 'officeName',
          type: 'text',
          label: 'Office Name',
          required: true,
        },
        {
          name: 'address',
          type: 'text',
          label: 'Address',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Contact',
    singular: 'Contact',
  },
}
