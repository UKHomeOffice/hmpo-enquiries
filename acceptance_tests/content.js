'use strict';

const enquiryTranslations = require('../apps/enquiries/translations/en/default');
const trackTranslations = require('../apps/track-application/translations/en/default');

module.exports = {
  'common': {
    buttons: {
      continue: enquiryTranslations.buttons.continue
    },
    error: enquiryTranslations.errorlist.title.single
  },
  'what-enquiry': {
    url: '/',
    header: enquiryTranslations.pages['what-enquiry'].header,
    fields: {
      id: {
        'track-application': 'enquiry-radio-track',
        'replace': 'enquiry-radio-replace',
        'progress': 'enquiry-radio-progress',
        'enquiry': 'enquiry-radio-enquiry',
        'feedback': 'enquiry-radio-feedback',
        'contact': 'enquiry-radio-contact',
      }
    }
  },
  'apply-online': {
    url: '/track-application/apply-online',
    fields: {
      label: trackTranslations.fields['apply-online-radio'].legend,
      id: {
        'no': 'apply-online-radio-no',
        'yes': 'apply-online-radio-yes'
      }
    }
  },
  'whose-application': {
    url: '/track-application/whose-application',
    fields: {
      label: trackTranslations.fields.representative.legend,
      id: {
        'my-application': 'representative-false',
        'someone-elses-application': 'representative-true'
      }
    }
  },
  'applicants-full-name': {
    url: '/track-application/applicants-full-name',
    fields: {
      label: {
        'rep': trackTranslations.fields['applicants-full-name'].label.default,
        'no-rep': trackTranslations.fields['applicants-full-name'].label.representative.false
      },
      hint: trackTranslations.fields['applicants-full-name'].hint.representative.false,
      id: 'input[type="text"]#applicants-full-name'
    },
    text: {
      name: 'Sterling Archer'
    }
  },
  'track-online': {
    url: '/track-application/track-online'
  },
  'ref-number': {
    url: '/track-application/ref-number',
    fields: {
      label: trackTranslations.fields['ref-number-text'].label,
      id: {
        'number-input': 'input[type="text"]#ref-number-text',
        'no-number-checkbox': 'input[type="checkbox"]#ref-number-checkbox'
      }
    },
    text: {
      'ref-number': '123456789'
    }
  },
  'email-address': {
    url: '/track-application/email-address',
    fields: {
      label: trackTranslations.fields['email-address'].label,
      hint: trackTranslations.fields['email-address'].hint.representative.false,
      id: 'input[type="text"]#email-address'
    },
    text: {
      'invalid-email': 'this is an email',
      'valid-email': 'email@email.com'
    }
  },
  'address': {
    url: '/track-application/address'
  },
  'applicants-dob': {
    url: '/track-application/applicants-dob'
  },
  'representatives-full-name': {
    url: '/track-application/representatives-full-name'
  },
  'relationship': {
    url: '/track-application/relationship'
  },
  'confirm': {
    url: '/track-application/confirm'
  },
  'request-declaration': {
    url: '/request-declaration'
  },
  'application-progress': {
    url: '/application-progress'
  },
  'application-enquiry': {
    url: '/application-enquiry'
  },
  'feedback': {
    url: '/feedback'
  },
  'contact-us': {
    url: '/contact-us'
  }
};
