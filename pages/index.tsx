import { memo } from 'react';
import Fumino from '../components/Home/Fumino';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title={['Home']}>
    <Fumino />
  </Layout>
);

export default memo(Home);
