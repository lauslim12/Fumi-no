import { NextSeo } from 'next-seo';
import { memo } from 'react';
import Luck from '../components/Motivation/Luck';
import Layout from '../components/Layout';
import { motivationSEO } from '../utils/seo';
import Quotes from '../components/Motivation/Quotes';

const Motivation = () => (
  <>
    <NextSeo {...motivationSEO} />

    <Layout title={['Motivation']} isFullPage>
      <Luck />
      <Quotes />
    </Layout>
  </>
);

export default memo(Motivation);
