import { memo } from 'react';
import ConfigProvider from '../components/ConfigProvider';
import Blessings from '../components/Main/Blessings';
import Configurations from '../components/Main/Configurations';
import Greetings from '../components/Main/Greetings';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';
import { SEO } from '../utils/seo';

const Main = () => (
  <>
    <NextSeo {...SEO} />

    <ConfigProvider>
      <Layout title={['Main']}>
        <Greetings />
        <Blessings />
        <Configurations />
      </Layout>
    </ConfigProvider>
  </>
);

export default memo(Main);
