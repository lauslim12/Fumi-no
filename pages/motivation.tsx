import { memo } from 'react';
import Luck from '../components/Home/Luck';
import Layout from '../components/Layout';

const Motivation = () => (
  <Layout title={['Motivation']}>
    <Luck />
  </Layout>
);

export default memo(Motivation);
