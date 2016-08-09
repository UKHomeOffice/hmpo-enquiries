'use strict';

const bootstrap = require('hof-bootstrap');

const mockSessionStore = require('./acceptance_tests/session');
const config = require('./config');

const CI = config.env === 'ci';

module.exports = bootstrap({
  sessionStore: CI ? mockSessionStore : null,
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
