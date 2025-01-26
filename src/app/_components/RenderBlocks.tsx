import React from 'react';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/blocks/Hero'));
const Timeline = dynamic(() => import('@/components/blocks/Timeline'));
const Skills = dynamic(() => import('@/components/blocks/Skills'));

const blockComponents = {
  hero: Hero,
  timeline: Timeline,
  skills: Skills,
};

interface Block {
  blockType: keyof typeof blockComponents;
  [key: string]: any;
}

const RenderBlocks: React.FC<{ layout: Block[] }> = ({ layout }) => {
  return (
    <>
      {layout?.map((block, i) => {
        const Component = blockComponents[block.blockType];
        if (Component) {
          return <Component key={i} block={block} />;
        }
        return null;
      })}
    </>
  );
};

export default RenderBlocks;