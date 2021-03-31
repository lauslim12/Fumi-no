import Router from 'next/router';
import { done, start } from 'nprogress';
import { memo, useEffect } from 'react';

const NProgress = () => {
  useEffect(() => {
    // Timeout prevents shallow routing from causing the progress bar to show.
    let startTimeout: number;

    const handleTimeout = () => {
      start();
    };

    const handleStart = () => {
      clearTimeout(startTimeout);
      startTimeout = window.setTimeout(handleTimeout);
    };

    const handleEnd = () => {
      clearTimeout(startTimeout);
      done();
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleEnd);
    Router.events.on('routeChangeError', handleEnd);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleEnd);
      Router.events.off('routeChangeError', handleEnd);
    };
  }, []);

  return null;
};

export default memo(NProgress);
