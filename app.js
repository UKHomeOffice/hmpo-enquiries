'use strict';

const _ = require('lodash');
const bootstrap = require('hof-bootstrap');
const config = require('./config.js');
const mockPostcode = require('./mock-postcode.js');

const routes = [
  require('./apps/enquiries/'),
  require('./apps/track-application/'),
  require('./apps/request-declaration/'),
  require('./apps/application-progress'),
  require('./apps/application-enquiry'),
  require('./apps/feedback'),
  require('./apps/contact-us')
];

const options = {
  views: './apps/common/views',
  fields: './apps/common/fields',
  routes
};

if (config.env === 'ci') {
  options.routes.unshift({
    name: 'common',
    params: '/:action?',
    steps: _.mapValues(Object.assign({}, require('./apps/common'), {
      '/empty': {}
    }), value => Object.assign(value, {next: '/blank'}))
  });

  options.middleware = [
    mockPostcode
  ];
}

bootstrap(options);
