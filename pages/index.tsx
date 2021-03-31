import { NextSeo } from 'next-seo';
import { memo } from 'react';
import Actions from '../components/Home/Actions';
import Fumino from '../components/Home/Fumino';
import Layout from '../components/Layout';
import { homeSEO } from '../utils/seo';

const Home = () => (
  <>
    <NextSeo {...homeSEO} />

    <Layout title={['Home']} isFullPage>
      <Fumino />
      <Actions />
    </Layout>
  </>
);

export default memo(Home);
