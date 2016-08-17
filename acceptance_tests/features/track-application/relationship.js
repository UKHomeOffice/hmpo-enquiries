'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Track Application / Relationship');

// eslint-disable-next-line max-params
Before((
  I,
  relationshipPage,
  repsFullNamePage,
  applicantsDobPage,
  addressPage,
  refNumberPage,
  applyOnlinePage,
  whoseApplicationPage,
  applicantsFullNamePage
) => {
  I.visitPage(relationshipPage, JOURNEY_NAME, [
    applyOnlinePage,
    whoseApplicationPage,
    applicantsFullNamePage,
    refNumberPage,
    addressPage,
    applicantsDobPage,
    repsFullNamePage
  ]);
});

Scenario('The correct form elements are present', (
  I,
  relationshipPage
) => {
  I.seeElements([
    relationshipPage.relationship
  ]);
});

Scenario('An error is shown if ref-number is not completed', (
  I,
  relationshipPage
) => {
  I.submitForm();
  I.seeErrors(relationshipPage.relationship);
});

Scenario('ON submitting the completed form I am taken to email step', (
  I,
  emailAddressPage,
  relationshipPage
) => {
  relationshipPage.fillFormAndSubmit();
  I.seeInCurrentUrl(emailAddressPage.url);
});

