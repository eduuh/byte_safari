import MainLayout from '@/components/layout';
import { MDXComponents } from '@/components/MDXComponents';
import PostDetails from '@/components/sections/PostDetails';
import SEO from '@/components/sections/seo';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import 'highlight.js/styles/atom-one-dark.css';
import { getPostFromSlug, getSlugs } from 'lib/mdx';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/page';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { IPostMeta } from 'types';
import withToc from '@stefanprobst/rehype-extract-toc';
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx';

interface IPostPage {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: IPostMeta;
  };
}

const PostPage: NextPageWithLayout<IPostPage> = ({ post }) => {
  const router = useRouter();
  return (
    <section className="py-3">
      <SEO title={`/images/${post.meta.title}`} urlImage={post.meta.image} />

      <div className="px-2">
        <div className="pt-5">
          <div className="flex justify-between">
            <div>
              <h2 className="text-tertiary-light dark:text-tertiary-dark">
                {post.meta.title}
              </h2>
              <PostDetails date={post.meta.date} status={post.meta.status} />
            </div>
            <div>
              <div className="flex container mx-auto py-4 items-start h-full">
                <div className="hidden md:visible">
                  <div
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 cursor-pointer hover:underline"
                  >
                    <ChevronLeftIcon className="h-4" />
                    <span className="text-md font-semibold">Go back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article>
            <MDXRemote {...post.source} components={MDXComponents} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default PostPage;

PostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
        withToc,
        [withTocExport, { name: 'toc' }],
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
