import { memo } from 'react';
import ConfigProvider from '../components/ConfigProvider';
import Blessings from '../components/Home/Blessings';
import Configurations from '../components/Home/Configurations';
import Fumino from '../components/Home/Fumino';
import Greetings from '../components/Home/Greetings';
import Luck from '../components/Home/Luck';
import Layout from '../components/Layout';

const Home = () => (
  <ConfigProvider>
    <Layout title={['Home']}>
      <Fumino />
      <Greetings />
      <Blessings />
      <Configurations />
      <Luck />
    </Layout>
  </ConfigProvider>
);

export default memo(Home);
