import { memo } from 'react';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title={['Home']}>
    <p>Hello World!</p>
  </Layout>
);

export default memo(Home);
