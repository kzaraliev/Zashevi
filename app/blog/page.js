import Link from "next/link";
import React from "react";

export const revalidate = 60; // Optional: This will revalidate the page every 60 seconds if you're using static generation

// Fetch the posts from WordPress API
async function getPosts() {
  const res = await fetch(
    "https://www.zashevi-trans.com/wp-json/wp/v2/posts?_fields=id,title,date,status,excerpt,slug",
    {
      next: { revalidate: 60 }, // Optional: use cache and revalidate every 60 seconds
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={new Date(post.date).toISOString()}
                    className="text-gray-500"
                  >
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title.rendered}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}{" "}
                    {/* Strip HTML tags */}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {/* Placeholder for author */}
                        Zashevi Trans
                      </Link>
                    </p>
                    <p className="text-gray-600">Blog Author</p>
                  </div>
                </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
