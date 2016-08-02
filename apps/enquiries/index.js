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
      fields: ['enquiry-radio'],
      next: '/track-application/apply-online',
      forks: [{
        target: '/replace-declaration',
        condition: {
          field: 'enquiry-radio',
          value: 'replace'
        }
      }, {
        target: '/application-progress',
        condition: {
          field: 'enquiry-radio',
          value: 'progress'
        }
      }, {
        target: '/application-enquiry',
        condition: {
          field: 'enquiry-radio',
          value: 'enquiry'
        }
      }, {
        target: '/feedback',
        condition: {
          field: 'enquiry-radio',
          value: 'feedback'
        }
      }, {
        target: '/contact-us',
        condition: {
          field: 'enquiry-radio',
          value: 'contact'
        }
      }],
      locals: {
        section: 'what-enquiry'
      }
    }
  }
};
