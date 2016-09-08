'use strict';

const controllers = require('hof').controllers;

module.exports = {
  name: 'enquiries',
  steps: {
    '/': {
      controller: controllers.start,
      next: '/enquiry-type'
    },
    '/enquiry-type': {
      fields: ['enquiry-type'],
      next: '/track-application/apply-online',
      forks: [{
        target: '/request-declaration/replacement-form',
        condition: {
          field: 'enquiry-type',
          value: 'replace'
        }
      }, {
        target: '/application-progress/whose-application',
        condition: {
          field: 'enquiry-type',
          value: 'progress'
        }
      }, {
        target: '/application-enquiry',
        condition: {
          field: 'enquiry-type',
          value: 'enquiry'
        }
      }, {
        target: '/feedback',
        condition: {
          field: 'enquiry-type',
          value: 'feedback'
        }
      }, {
        target: '/contact-us',
        condition: {
          field: 'enquiry-type',
          value: 'contact'
        }
      }],
      locals: {
        section: 'what-enquiry'
      }
    }
  }
};
