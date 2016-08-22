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
      locals: {
        section: 'request-declaration'
      }
    }
  }
};
