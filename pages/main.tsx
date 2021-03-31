import { memo } from 'react';
import ConfigProvider from '../components/ConfigProvider';
import Blessings from '../components/Main/Blessings';
import Configurations from '../components/Main/Configurations';
import Greetings from '../components/Main/Greetings';
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
