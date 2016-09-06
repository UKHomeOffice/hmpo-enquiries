'use strict';

const isRep = req => req.sessionModel.get('representative') === 'true';
const isPost = req => req.sessionModel.get('post-replacement') === 'true';

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
      fields: ['applicants-full-name'],
      next: '/ref-number',
      locals: {
        section: 'request-declaration'
      }
    },
    '/ref-number': {
      fields: ['ref-number'],
      next: '/applicants-dob',
      forks: [{
        target: '/email-address',
        condition(req) {
          return !isPost(req) && !isRep(req);
        }
      }, {
        target: '/address',
        condition(req) {
          return isPost(req) && !isRep(req);
        }
      }],
      locals: {
        section: 'request-declaration'
      }
    },
    '/email-address': {
      fields: ['email-address'],
      next: '/confirm',
      locals: {
        section: 'request-declaration'
      }
    },
    '/address': {
    },
    '/applicants-dob': {
      next: '/representatives-full-name',
      locals: {
        section: 'request-declaration'
      }
    },
    '/representatives-full-name': {
      fields: [
        'representatives-full-name'
      ],
      next: '/relationship',
      locals: {
        section: 'request-declaration'
      }
    },
    '/relationship': {
      next: '/email-address',
      forks: [{
        target: '/address',
        condition: isPost
      }],
      locals: {
        section: 'request-declaration'
      }
    },
    '/confirm': {
    }
  }
};
