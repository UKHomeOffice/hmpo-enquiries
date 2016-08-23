'use strict';

const path = require('path');

const relative = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  name: 'hmpo-enquiries',
  include: {
    applyOnlinePage: relative('./apps/common/page-objects/apply-online.js'),
    trackOnlinePage: relative('./apps/common/page-objects/track-online.js'),
    whoseApplicationPage: relative('./apps/common/page-objects/whose-application.js'),
    applicantsFullNamePage: relative('./apps/common/page-objects/applicants-full-name.js'),
    refNumberPage: relative('./apps/common/page-objects/ref-number.js'),
    emailAddressPage: relative('./apps/common/page-objects/email-address.js'),
    addressPage: relative('./apps/common/page-objects/address.js'),
    applicantsDobPage: relative('./apps/common/page-objects/applicants-dob.js'),
    repsFullNamePage: relative('./apps/common/page-objects/representatives-full-name.js'),
    relationshipPage: relative('./apps/common/page-objects/relationship.js'),
    enquiryTypePage: relative('./apps/common/page-objects/enquiry-type.js'),
    confirmPage: relative('./apps/common/page-objects/confirm.js'),
    replacementFormPage: relative('./apps/common/page-objects/replacement-form.js'),
    sendReplacementPage: relative('./apps/common/page-objects/send-replacement.js')
  }
};
