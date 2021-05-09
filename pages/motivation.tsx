import { NextSeo } from 'next-seo';
import { memo } from 'react';

import Layout from '../components/Layout';
import Luck from '../components/Motivation/Luck';
import Quotes from '../components/Motivation/Quotes';
import { motivationSEO } from '../utils/seo';

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
