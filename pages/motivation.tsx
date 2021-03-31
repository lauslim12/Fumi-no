import { memo } from 'react';
import Luck from '../components/Motivation/Luck';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';
import { motivationSEO } from '../utils/seo';

const Motivation = () => (
  <>
    <NextSeo {...motivationSEO} />

    <Layout title={['Motivation']}>
      <Luck />
    </Layout>
  </>
);

export default memo(Motivation);
