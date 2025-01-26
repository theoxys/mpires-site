import { Block } from 'payload/types';

export const Skills: Block = {
  slug: 'skills',
  labels: {
    singular: 'Skills',
    plural: 'Skills Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'skills',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'proficiency',
              type: 'select',
              options: [
                {
                  label: 'Beginner',
                  value: 'beginner',
                },
                {
                  label: 'Intermediate',
                  value: 'intermediate',
                },
                {
                  label: 'Advanced',
                  value: 'advanced',
                },
                {
                  label: 'Expert',
                  value: 'expert',
                },
              ],
              required: true,
            }
          ]
        }
      ]
    }
  ],
};