import React from 'react';

// Функция за взимане на пост по slug
async function getPostBySlug(slug) {
  const res = await fetch(
    `https://www.zashevi-trans.com/wp-json/wp/v2/posts?slug=${slug}&_fields=id,title,content,date,status`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch post data');
  }

  const posts = await res.json();

  // Уверяваме се, че има поне един резултат, защото WordPress връща масив
  if (posts.length === 0) {
    throw new Error('Post not found');
  }

  return posts[0]; // Връщаме първия (и единствен) пост
}

// Компонент за рендиране на отделния пост
export default async function PostPage({ params }) {
  const { slug } = params;  // Получаваме slug от URL параметрите
  const post = await getPostBySlug(slug);  // Взимаме поста по slug

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-semibold text-gray-900">
            {post.title.rendered}
          </h1>
          <time
            dateTime={new Date(post.date).toISOString()}
            className="block mt-2 text-sm text-gray-500"
          >
            {new Date(post.date).toLocaleDateString()}
          </time>
          <div
            className="mt-8 prose prose-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </div>
    </div>
  );
}
