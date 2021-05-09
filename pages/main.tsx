import { memo } from 'react';

import ConfigProvider from '../components/ConfigProvider';
import Layout from '../components/Layout';
import Blessings from '../components/Main/Blessings';
import Configurations from '../components/Main/Configurations';
import Greetings from '../components/Main/Greetings';

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
