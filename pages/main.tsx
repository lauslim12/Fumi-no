import { memo } from 'react';
import ConfigProvider from '../components/ConfigProvider';
import Blessings from '../components/Home/Blessings';
import Configurations from '../components/Home/Configurations';
import Greetings from '../components/Home/Greetings';
import Layout from '../components/Layout';

const Main = () => (
  <ConfigProvider>
    <Layout title={['Main']}>
      <Greetings />
      <Blessings />
      <Configurations />
    </Layout>
  </ConfigProvider>
);

export default memo(Main);
