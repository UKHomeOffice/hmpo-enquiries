'use strict';

module.exports = {
  baseUrl: '/request-declaration',
  steps: {
    '/replacement-form': {
      next: '/whose-application',
      locals: {
        section: 'request-declaration'
      }
    },
    '/whose-application': {
      fields: ['representative'],
      next: '/send-replacement',
      locals: {
        section: 'request-declaration'
      }
    },
    '/send-replacement': {
      next: '/applicants-full-name',
      locals: {
        section: 'request-declaration'
      }
    },
    '/applicants-full-name': {
      next: '/ref-number',
      locals: {
        section: 'request-declaration'
      }
    },
    '/ref-number': {
      locals: {
        section: 'request-declaration'
      }
    }
  }
};
