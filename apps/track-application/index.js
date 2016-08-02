'use strict';

module.exports = {
  baseUrl: '/track-application',
  steps: {
    '/apply-online': {
      fields: ['apply-online-radio'],
      next: '/track-online',
      forks: [{
        target: '/whos-application',
        condition: {
          field: 'apply-online-radio',
          value: 'no'
        }
      }],
      backLink: 'what-enquiry',
      locals: {
        section: 'track-application'
      }
    },
    '/track-online': {
      locals: {
        section: 'track-application'
      }
    },
    '/whos-application': {
      locals: {
        section: 'track-application'
      }
    }
  }
};
