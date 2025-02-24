async function getPostBySlug(slug) {
  const res = await fetch(
    `https://www.zashevi-trans.com/wp-json/wp/v2/posts?slug=${slug}&_fields=id,title,content,date,status,yoast_head_json`,
    { next: { revalidate: 60 } } // Кеширане за 60 секунди
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  const posts = await res.json();

  if (posts.length === 0) {
    throw new Error("Post not found");
  }

  return posts[0];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const meta = post.yoast_head_json;
  const ogImage =
    meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    alternates: {
      canonical: meta.canonical,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const meta = post.yoast_head_json;
  const ogImage =
    meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article className="mx-auto max-w-5xl">
          {ogImage && (
            <img
              src={ogImage}
              alt={meta.og_title}
              className="w-full h-auto mb-4"
            />
          )}
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
