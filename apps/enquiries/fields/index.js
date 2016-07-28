'use strict';

module.exports = {
  'enquiry-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'track',
      label: 'Track a passport application'
    }, {
      value: 'replace',
      label: 'Request a replacement declaration form'
    }, {
      value: 'progress',
      label: 'Enquire about a passport application in progress'
    }, {
      value: 'enquiry',
      label: 'Make a passport application enquiry'
    }, {
      value: 'feedback',
      label: 'Make a complaint or leave feedback'
    }, {
      value: 'contact',
      label: 'Contact us'
    }]
  }
};

