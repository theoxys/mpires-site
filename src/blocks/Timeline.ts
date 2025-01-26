import { Block } from 'payload/types';

export const Timeline: Block = {
  slug: 'timeline',
  labels: {
    singular: 'Timeline',
    plural: 'Timeline Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'period',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'technologies',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            }
          ]
        }
      ]
    }
  ],
};