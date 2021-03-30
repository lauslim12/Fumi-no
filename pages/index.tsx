import { memo } from 'react';
import Blessings from '../components/Home/Blessings';
import Fumino from '../components/Home/Fumino';
import Greetings from '../components/Home/Greetings';
import Luck from '../components/Home/Luck';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title={['Home']}>
    <Fumino />
    <Greetings />
    <Blessings />
    <Luck />
  </Layout>
);

export default memo(Home);
