const pageTitles = {
  main: 'Fumino',
  front: 'Fumino - Home',
  motivation: 'Fumino - Motivation',
};

export const SEO = {
  title: pageTitles.main,
  description: 'Fumino is an open-source, web version of Happiness Jar! No registration needed!',
  openGraph: {
    title: pageTitles.main,
    description: 'Fumino is an open-source, web version of Happiness Jar! No registration needed!',
    type: 'website',
    locale: 'en_US',
    url: 'https://fumi-no.com/main',
    site_name: 'Fumino',
    images: [
      {
        url: 'https://fumi-no.com/fumino-seo.png',
        width: 512,
        height: 512,
        alt: 'Icon for Fumino',
      },
    ],
  },
};

export const frontSEO = {
  ...SEO,
  title: pageTitles.front,
  openGraph: {
    ...SEO.openGraph,
    title: pageTitles.front,
    url: 'https://fumi-no.com/',
  },
};

export const motivationSEO = {
  ...SEO,
  title: pageTitles.motivation,
  openGraph: {
    ...SEO.openGraph,
    title: pageTitles.motivation,
    url: 'https://fumi-no.com/motivation',
  },
};
