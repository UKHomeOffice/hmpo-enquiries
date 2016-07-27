'use strict';

module.exports = {
  name: 'enquiries',
  steps: {
    '/': {
      template: 'step',
      fields: ['name-text'],
      next: '/step1'
    },
    '/step1': {
      template: 'step',
      fields: ['name-text']
    }
  }
};
