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
      enquiry: {
        legend: enquiryTranslations.fields.enquiry.legend,
        options: {
          track: {
            label: enquiryTranslations.fields.enquiry.options.track,
            selector: '#enquiry-track'
          },
          replace: {
            label: enquiryTranslations.fields.enquiry.options.replace,
            selector: '#enquiry-replace'
          },
          progress: {
            label: enquiryTranslations.fields.enquiry.options.progress,
            selector: '#enquiry-progress'
          },
          enquiry: {
            label: enquiryTranslations.fields.enquiry.options.enquiry,
            selector: '#enquiry-enquiry'
          },
          feedback: {
            label: enquiryTranslations.fields.enquiry.options.feedback,
            selector: '#enquiry-feedback'
          },
          contact: {
            label: enquiryTranslations.fields.enquiry.options.contact,
            selector: '#enquiry-contact'
          }
        }
      }
    }
  },
  'apply-online': {
    url: '/track-application/apply-online',
    fields: {
      'apply-online': {
        label: trackTranslations.fields['apply-online'].legend,
        options: {
          yes: {
            label: trackTranslations.fields['apply-online'].options.yes,
            selector: '#apply-online-yes'
          },
          no: {
            label: trackTranslations.fields['apply-online'].options.no,
            selector: '#apply-online-no'
          }
        }
      }
    }
  },
  'whose-application': {
    url: '/track-application/whose-application',
    fields: {
      representative: {
        label: trackTranslations.fields.representative.legend,
        options: {
          'true': {
            label: trackTranslations.fields.representative.options.true,
            selector: '#representative-true'
          },
          'false': {
            label: trackTranslations.fields.representative.options.false,
            selector: '#representative-false'
          }
        }
      }
    }
  },
  'applicants-full-name': {
    url: '/track-application/applicants-full-name',
    fields: {
      'applicants-full-name': {
        label: {
          'rep': trackTranslations.fields['applicants-full-name'].label.default,
          'no-rep': trackTranslations.fields['applicants-full-name'].label.representative.false
        },
        hint: trackTranslations.fields['applicants-full-name'].hint.representative.false,
        selector: '#applicants-full-name',
        value: 'Sterling Archer'
      }
    }
  },
  'track-online': {
    url: '/track-application/track-online'
  },
  'ref-number': {
    url: '/track-application/ref-number',
    fields: {
      'ref-number': {
        label: trackTranslations.fields['ref-number'].label,
        value: '123456789',
        selector: '#ref-number'
      },
      'no-ref-number': {
        label: trackTranslations.fields['no-ref-number'].label,
        selector: '#no-ref-number'
      }
    }
  },
  'email-address': {
    url: '/track-application/email-address'
  },
  'address': {
    url: '/track-application/address'
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
