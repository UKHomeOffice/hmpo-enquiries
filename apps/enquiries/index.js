'use strict';

const controllers = require('hof').controllers;

module.exports = {
  name: 'enquiries',
  steps: {
    '/': {
      controller: controllers.start,
      next: '/what-enquiry'
    },
    '/what-enquiry': {
      fields: ['enquiry'],
      next: '/track-application/apply-online',
      forks: [{
        target: '/request-declaration',
        condition: {
          field: 'enquiry',
          value: 'replace'
        }
      }, {
        target: '/application-progress',
        condition: {
          field: 'enquiry',
          value: 'progress'
        }
      }, {
        target: '/application-enquiry',
        condition: {
          field: 'enquiry',
          value: 'enquiry'
        }
      }, {
        target: '/feedback',
        condition: {
          field: 'enquiry',
          value: 'feedback'
        }
      }, {
        target: '/contact-us',
        condition: {
          field: 'enquiry',
          value: 'contact'
        }
      }],
      locals: {
        section: 'what-enquiry'
      }
    }
  }
};
