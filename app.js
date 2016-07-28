'use strict';

const bootstrap = require('hof-bootstrap');

bootstrap({
  views: false,
  fields: false,
  routes: [
    require('./apps/enquiries/'),
    require('./apps/track-application/'),
    require('./apps/replace-declaration/'),
    require('./apps/application-progress'),
    require('./apps/application-enquiry'),
    require('./apps/feedback'),
    require('./apps/contact-us')
  ]
});
