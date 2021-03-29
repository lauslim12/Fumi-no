import { memo } from 'react';
import Blessings from '../components/Home/Blessings';
import Fumino from '../components/Home/Fumino';
import Greetings from '../components/Home/Greetings';
import Quotes from '../components/Home/Quotes';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title={['Home']}>
    <Fumino />
    <Greetings />
    <Blessings />
    <Quotes />
  </Layout>
);

export default memo(Home);
