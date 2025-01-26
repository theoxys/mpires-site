import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPayloadClient } from '../../getPayload';

async function getPosts() {
  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedDate',
  });
  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.featuredImage?.url}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category?.name}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}