'use strict';

const isRep = req => req.sessionModel.get('representative') === 'true';

module.exports = {
  name: 'track-application',
  baseUrl: '/track-application',
  params: '/:action?',
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
        target: '/postcode',
        condition: isRep
      }],
      locals: {
        section: 'track-application'
      }
    },
    '/representatives-full-name': {
      fields: [
        'representatives-full-name'
      ],
      next: '/relationship',
      locals: {
        section: 'track-application'
      }
    },
    '/applicants-dob': {
      controller: require('./controllers/applicants-dob'),
      fields: [
        'dob',
        'dob-day',
        'dob-month',
        'dob-year'
      ],
      next: '/representatives-full-name',
      locals: {
        section: 'track-application'
      }
    },
    '/email-address': {
      fields: ['email-address'],
      next: '/postcode',
      forks: [{
        target: '/confirm',
        condition: isRep
      }],
      locals: {
        section: 'track-application'
      }
    },
    '/postcode': {
      controller: require('../common/controllers/postcode'),
      fields: [
        'postcode-code'
      ],
      forks: [{
        target: '/address-lookup',
        condition(req) {
          const addresses = req.sessionModel.get('addresses');
          return addresses && addresses.length;
        }
      }],
      continueOnEdit: true,
      next: '/address',
      locals: {
        section: 'track-application',
        subsection: 'address'
      }
    },
    '/address-lookup': {
      controller: require('../common/controllers/address-lookup'),
      fields: [
        'address-lookup'
      ],
      continueOnEdit: true,
      next: '/confirm',
      forks: [{
        target: '/applicants-dob',
        condition: isRep
      }],
      locals: {
        section: 'track-application',
        subsection: 'address'
      }
    },
    '/address': {
      controller: require('../common/controllers/address'),
      fields: [
        'address-manual'
      ],
      next: '/confirm',
      prereqs: ['/postcode', '/email-address', '/ref-number'],
      backLinks: ['postcode'],
      forks: [{
        target: '/applicants-dob',
        condition: isRep
      }],
      locals: {
        section: 'track-application',
        subsection: 'address'
      }
    },
    '/relationship': {
      fields: [
        'relationship'
      ],
      next: '/email-address',
      locals: {
        section: 'track-application'
      }
    },
    '/confirm': {}
  }
};
