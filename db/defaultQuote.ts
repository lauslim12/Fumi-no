import Quote from '../types/Quote';

const defaultQuote: Quote = {
  author: 'Nicholas Dwiarto W.',
  quote: 'Pioneer of the Stars.',
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
