'use strict';

const _ = require('lodash');
const bootstrap = require('hof-bootstrap');

const routes = [
  require('./apps/enquiries/'),
  require('./apps/track-application/'),
  require('./apps/request-declaration/'),
  require('./apps/application-progress'),
  require('./apps/application-enquiry'),
  require('./apps/feedback'),
  require('./apps/contact-us')
];

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === 'ci') {
  routes.unshift({
    name: 'common',
    steps: _.mapValues(Object.assign({}, require('./apps/common'), {
      '/empty': {}
    }), value => Object.assign(value, {next: '/blank'}))
  });
}

module.exports = bootstrap({
  views: false,
  fields: './apps/common/fields',
  routes
});
