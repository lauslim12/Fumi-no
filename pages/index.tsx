import { memo } from 'react';
import Fumino from '../components/Home/Fumino';
import Greetings from '../components/Home/Greetings';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title={['Home']}>
    <Fumino />
    <Greetings />
  </Layout>
);

export default memo(Home);
