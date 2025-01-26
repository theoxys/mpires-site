import React from 'react';
import { getPayloadClient } from '../getPayload';
import RenderBlocks from './_components/RenderBlocks';

async function getHomePage() {
  const payload = await getPayloadClient();
  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  });
  return pages[0];
}

export default async function Home() {
  const page = await getHomePage();

  return (
    <main>
      <RenderBlocks layout={page?.layout || []} />
    </main>
  );
}