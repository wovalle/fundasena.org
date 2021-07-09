import { getClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export async function getAllPostsForActivities(preview) {
  const fields = `
  title,
  mainImage,
  summary,
  'slug': slug.current,
  'date': publishedAt,
  'author': author->{name},
`;

  const results = await getClient(preview).fetch(
    `*[_type == "post"] | order(publishedAt desc){${fields}}`
  );

  return getUniquePosts(results);
}

export async function getPostsForFooter(preview) {
  const fields = `
  title,
  'slug': slug.current,
`;

  const results = await getClient(preview).fetch(
    `*[_type == "post"] | order(publishedAt desc){${fields}}[0..3]`
  );

  return getUniquePosts(results);
}

export async function getAllPostsWithSlug(preview) {
  const fields = `
  'slug': slug.current,
`;

  return getClient(preview).fetch(`*[_type == "post"]{ ${fields}}`);
}

export async function getPostBySlug(slug, preview) {
  const fields = `
  title,
  mainImage,
  body,
  'date': publishedAt,
  'slug': slug.current,
  'author': author->{name, 'picture': image.asset->url},
`;

  return getClient(preview)
    .fetch(
      `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {${fields}}`,
      { slug }
    )
    .then((res) => res?.[0]);
}
