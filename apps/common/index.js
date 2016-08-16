'use strict';

module.exports = {
  '/applicants-full-name': {
    fields: [
      'applicants-full-name'
    ]
  },
  '/representatives-full-name': {
    fields: [
      'representatives-full-name'
    ]
  },
  '/email-address': {
    fields: [
      'email-address'
    ]
  },
  '/postcode': {
    controller: require('./controllers/postcode'),
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
    next: '/address',
    locals: {
      subsection: 'address'
    }
  },
  '/address-lookup': {
    controller: require('./controllers/address-lookup'),
    fields: [
      'address-lookup'
    ],
    locals: {
      subsection: 'address'
    }
  },
  '/address': {
    fields: [
      'address-manual'
    ],
    locals: {
      subsection: 'address'
    }
  },
};
