import MainLayout from '@/components/layout';
import { getAllPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from './page';
import LatestPosts from '@/components/sections/latestPosts';
import SEO from '@/components/sections/seo';

interface IHome {
  postsMeta: IPostMeta[];
}

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <SEO />
      <LatestPosts postsMeta={postsMeta} />
    </>
  );
};

export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const postsMeta = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { postsMeta } };
}
