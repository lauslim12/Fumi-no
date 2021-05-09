import { memo } from 'react';

import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const NotFoundPage = () => (
  <Layout title={['Not Found']} isFullPage>
    <NotFound />
  </Layout>
);

export default memo(NotFoundPage);
