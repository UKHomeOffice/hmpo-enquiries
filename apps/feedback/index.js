'use strict';

module.exports = {
  name: 'feedback',
  steps: {
    '/feedback': {
      fields: ['test-text'],
      locals: {
        section: 'feedback'
      }
    }
  }
};
