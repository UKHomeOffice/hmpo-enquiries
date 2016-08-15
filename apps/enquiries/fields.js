'use strict';

module.exports = {
  'enquiry-type': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'track',
      label: 'fields.enquiry-type.options.track'
    }, {
      value: 'replace',
      label: 'fields.enquiry-type.options.replace'
    }, {
      value: 'progress',
      label: 'fields.enquiry-type.options.progress'
    }, {
      value: 'enquiry',
      label: 'fields.enquiry-type.options.enquiry'
    }, {
      value: 'feedback',
      label: 'fields.enquiry-type.options.feedback'
    }, {
      value: 'contact',
      label: 'fields.enquiry-type.options.contact'
    }]
  }
};
