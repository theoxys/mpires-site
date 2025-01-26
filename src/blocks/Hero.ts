import { Block } from 'payload/types';

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Call to Action Text',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Call to Action Link',
    },
  ],
};