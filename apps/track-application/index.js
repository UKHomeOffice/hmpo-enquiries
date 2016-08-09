'use strict';

const isRep = req => req.sessionModel.get('representative') === 'true';

module.exports = {
  baseUrl: '/track-application',
  steps: {
    '/apply-online': {
      fields: ['apply-online'],
      next: '/track-online',
      forks: [{
        target: '/whose-application',
        condition: {
          field: 'apply-online',
          value: 'no'
        }
      }],
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
      fields: ['representative'],
      next: '/applicants-full-name',
      locals: {
        section: 'track-application'
      }
    },
    '/applicants-full-name': {
      fields: ['applicants-full-name'],
      next: '/ref-number',
      locals: {
        section: 'track-application'
      }
    },
    '/ref-number': {
      fields: [
        'ref-number',
        'no-ref-number'
      ],
      next: '/email-address',
      forks: [{
        target: '/address',
        condition: isRep
      }],
      locals: {
        section: 'track-application'
      }
    },
    '/representatives-full-name': {
      next: '/relationship',
      locals: {
        section: 'track-application'
      }
    },
    '/applicants-dob': {
      next: '/representatives-full-name'
    },
    '/email-address': {
      fields: ['email-address'],
      next: '/address',
      forks: [{
        target: '/confirm',
        condition: isRep
      }],
      locals: {
        section: 'track-application'
      }
    },
    '/address': {
      next: '/confirm',
      forks: [{
        target: '/applicants-dob',
        condition: isRep
      }]
    },
    '/relationship': {
      next: '/email-address'
    },
    '/confirm': {}
  }
};
