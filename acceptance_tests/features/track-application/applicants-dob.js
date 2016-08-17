'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Track Application / Applicants Date of birth');

// eslint-disable-next-line max-params
Before((
  I,
  applicantsDOBPage,
  addressPage,
  refNumberPage,
  applicantsFullNamePage,
  applyOnlinePage,
  whoseApplicationPage
) => {
  I.visitPage(applicantsDOBPage, JOURNEY_NAME, [
    applyOnlinePage,
    whoseApplicationPage,
    applicantsFullNamePage,
    refNumberPage,
    addressPage
  ]);
});

Scenario('The correct form elements are present', (
  I,
  applicantsDOBPage
) => {
  I.seeElements([
    applicantsDOBPage['dob-day'],
    applicantsDOBPage['dob-month'],
    applicantsDOBPage['dob-year']
  ]);
});

Scenario('An error is shown if applicants-full-name is not completed', (
  I,
  applicantsDOBPage
) => {
  I.submitForm();
  I.seeErrors(applicantsDOBPage.dob);
});

Scenario('On submitting the completed form I am taken to representatives-full-name step', (
  I,
  applicantsDOBPage,
  repsFullNamePage
) => {
  applicantsDOBPage.fillFormAndSubmit();
  I.seeInCurrentUrl(repsFullNamePage.url);
});
