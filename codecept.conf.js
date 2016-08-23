'use strict';

const path = require('path');

const pagesPath = page => path.resolve(__dirname,
  `./apps/common/acceptance/pages/${page}`);

module.exports = {
  name: 'hmpo-enquiries',
  features: './**/acceptance/features/**/*.js',
  include: {
    applyOnlinePage: pagesPath('apply-online.js'),
    trackOnlinePage: pagesPath('track-online.js'),
    whoseApplicationPage: pagesPath('whose-application.js'),
    applicantsFullNamePage: pagesPath('applicants-full-name.js'),
    refNumberPage: pagesPath('ref-number.js'),
    emailAddressPage: pagesPath('email-address.js'),
    addressPage: pagesPath('address.js'),
    applicantsDobPage: pagesPath('applicants-dob.js'),
    repsFullNamePage: pagesPath('representatives-full-name.js'),
    relationshipPage: pagesPath('relationship.js'),
    enquiryTypePage: pagesPath('enquiry-type.js'),
    confirmPage: pagesPath('confirm.js'),
    replacementFormPage: pagesPath('replacement-form.js'),
    howToReceivePage: pagesPath('how-to-receive.js')
  }
};
