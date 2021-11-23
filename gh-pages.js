const pages = require('gh-pages');

pages.publish('dist', {}, console.warn).then(console.log);
