'use strict';

const bootstrap = require('hof-bootstrap');

module.exports = bootstrap({
  views: false,
  fields: false,
  routes: [
    require('./apps/enquiries/'),
    require('./apps/track-application/'),
    require('./apps/request-declaration/'),
    require('./apps/application-progress'),
    require('./apps/application-enquiry'),
    require('./apps/feedback'),
    require('./apps/contact-us')
  ]
});
