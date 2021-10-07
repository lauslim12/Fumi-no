import Quote from '../types/Quote';

const defaultQuote: Quote = {
  author: 'The Developer',
  quote: 'Everything is possible if you put in the effort.',
  length: '21',
  tags: ['motivation'],
  category: 'inspire',
  language: 'en',
  date: Date.now().toLocaleString(),
  permalink: null,
  id: 'N01',
  background: null,
  title: 'Inspiring quote of the day',
};

export default defaultQuote;
