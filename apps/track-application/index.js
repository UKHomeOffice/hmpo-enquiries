'use strict';

module.exports = {
  baseUrl: '/track-application',
  steps: {
    '/apply-online': {
      fields: ['apply-online-radio'],
      next: '/track-online',
      forks: [{
        target: '/whose-application',
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
    '/whose-application': {
      fields: ['whose-app-radio'],
      next: '/your-full-name',
      forks: [{
        target: '/applicants-full-name',
        condition: {
          field: 'whose-app-radio',
          value: 'someone else\'s'
        }
      }],
      locals: {
        section: 'track-application'
      }
    },
    '/your-full-name': {
      locals: {
        section: 'track-application'
      }
    },
    '/applicants-full-name': {
      locals: {
        section: 'track-application'
      }
    }
  }
};
