'use strict';

module.exports = {
  name: 'request-declaration',
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
      next: '/how-to-receive',
      locals: {
        section: 'request-declaration'
      }
    },
    '/how-to-receive': {
      fields: ['post-replacement'],
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
