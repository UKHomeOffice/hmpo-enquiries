'use strict';

const isRep = req => req.sessionModel.get('representative') === 'true';

module.exports = {
  name: 'application-progress',
  baseUrl: '/application-progress',
  steps: {
    '/whose-application': {
      fields: ['representative'],
      next: '/ref-number',
      forks: [{
        target: '/applicants-dob',
        condition: isRep
      }],
      locals: {
        section: 'application-progress'
      }
    },
    '/applicants-dob': {
      locals: {
        section: 'application-progress'
      }
    },
    '/ref-number': {
      locals: {
        section: 'application-progress'
      }
    }
  }
};
