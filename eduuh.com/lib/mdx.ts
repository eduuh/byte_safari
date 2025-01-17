import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { IPost } from 'types';

const PUBLISHED_POSTS_PATH = path.join(process.cwd(), 'posts', 'published');

export const getSlugs = (): string[] => {
  const paths = sync(`${PUBLISHED_POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const slug = fileName.split('.')[0];
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .filter((slug) => !slug.meta.draft)
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};

export const getPostFromSlug = (slug: string): IPost => {
  const postPath = path.join(PUBLISHED_POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      image: data.image ?? '',
      draft: data.draft ?? false,
      status: data.status ?? ' ',
    },
  };
};
