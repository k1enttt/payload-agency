import type { Block } from 'payload'

export const SocialProof: Block = {
  slug: 'socialProof',
  interfaceName: 'SocialProofBlock',
  fields: [
    {
      name: 'developerNumber',
      type: 'text',
    },
    {
      name: 'contributorNumber',
      type: 'text',
    },
    {
      name: 'organizationNumber',
      type: 'text',
    },
  ],
}
