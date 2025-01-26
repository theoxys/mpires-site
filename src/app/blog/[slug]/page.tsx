import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPayloadClient } from '../../../getPayload';

async function getPost(slug: string) {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!posts.docs[0]) {
    return null;
  }

  return posts.docs[0];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="relative h-[400px] mb-8">
        <Image
          src={post.featuredImage?.url}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
      <div className="flex items-center text-gray-500 mb-8">
        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{post.category?.name}</span>
        <span className="mx-2">•</span>
        <span>By {post.author?.name}</span>
      </div>
      <div className="prose prose-lg max-w-none">
        {/* Renderize o conteúdo rich text aqui */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}