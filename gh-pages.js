import pages from 'gh-pages';

pages.publish('dist', {}, console.warn).then(console.info);
