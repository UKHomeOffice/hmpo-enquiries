'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Track Application / Representatives Full Name');

// eslint-disable-next-line max-params
Before((
  I,
  repsFullNamePage,
  applicantsDobPage,
  addressPage,
  refNumberPage,
  applicantsFullNamePage,
  applyOnlinePage,
  whoseApplicationPage
) => {
  I.visitPage(repsFullNamePage, JOURNEY_NAME, [
    applyOnlinePage,
    whoseApplicationPage,
    applicantsFullNamePage,
    refNumberPage,
    addressPage,
    applicantsDobPage
  ]);
});

Scenario('The correct form elements are present', (
  I,
  repsFullNamePage
) => {
  I.seeElements(repsFullNamePage['representatives-full-name']);
});

Scenario('An error is shown if applicants-full-name is not completed', (
  I,
  repsFullNamePage
) => {
  I.submitForm();
  I.seeErrors(repsFullNamePage['representatives-full-name']);
});

Scenario('ON submitting the completed form I am taken to relationship step', (
  I,
  repsFullNamePage,
  relationshipPage
) => {
  repsFullNamePage.fillFormAndSubmit();
  I.seeInCurrentUrl(relationshipPage.url);
});
