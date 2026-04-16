import { getCollection, type CollectionEntry } from 'astro:content';

const includeDrafts = import.meta.env.MODE !== 'production';

export async function getPublishedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', ({ data }) => includeDrafts || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
