// Adapted from 'https://github.com/chiyadev/genshin-schedule/'. Modified for TypeScript.
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

// hack to preserve scroll position across navigations in next.js
// https://gist.github.com/claus/992a5596d6532ac91b24abe24e10ae81

interface ScrollPos {
  x: number;
  y: number;
}

const saveScrollPos = (key: string): void => {
  const scrollPos: ScrollPos = {
    x: window.scrollX,
    y: window.scrollY,
  };

  sessionStorage.setItem(key, JSON.stringify(scrollPos));
};

const restoreScrollPos = (key: string): void => {
  try {
    const { x, y } = JSON.parse(sessionStorage.getItem(key) || '') as ScrollPos;
    window.scrollTo(x, y);
  } catch {
    // ignored
  }
};

const useScrollPreserver = (): void => {
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      let shouldScrollRestore = false;

      window.history.scrollRestoration = 'manual';
      restoreScrollPos(router.asPath);

      const onBeforeUnload = (e: BeforeUnloadEvent) => {
        saveScrollPos(router.asPath);
        delete e.returnValue;
      };

      const onRouteChangeStart = () => {
        saveScrollPos(router.asPath);
      };

      const onRouteChangeComplete = (url: string) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPos(url);
        }
      };

      window.addEventListener('beforeunload', onBeforeUnload);
      Router.events.on('routeChangeStart', onRouteChangeStart);
      Router.events.on('routeChangeComplete', onRouteChangeComplete);

      Router.beforePopState(() => {
        shouldScrollRestore = true;
        return true;
      });

      return () => {
        window.removeEventListener('beforeunload', onBeforeUnload);
        Router.events.off('routeChangeStart', onRouteChangeStart);
        Router.events.off('routeChangeComplete', onRouteChangeComplete);
        Router.beforePopState(() => true);
      };
    }

    return () => null;
  }, [router]);
};

export default useScrollPreserver;
