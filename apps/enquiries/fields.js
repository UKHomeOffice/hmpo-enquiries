'use strict';

module.exports = {
  'enquiry': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'track',
      label: 'fields.enquiry.options.track'
    }, {
      value: 'replace',
      label: 'fields.enquiry.options.replace'
    }, {
      value: 'progress',
      label: 'fields.enquiry.options.progress'
    }, {
      value: 'enquiry',
      label: 'fields.enquiry.options.enquiry'
    }, {
      value: 'feedback',
      label: 'fields.enquiry.options.feedback'
    }, {
      value: 'contact',
      label: 'fields.enquiry.options.contact'
    }]
  }
};
