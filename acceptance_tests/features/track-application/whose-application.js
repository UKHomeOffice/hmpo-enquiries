'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Whose Application step');

Before((
  I,
  whoseApplicationPage,
  applyOnlinePage
) => {
  I.visitPage(whoseApplicationPage, JOURNEY_NAME, [
    applyOnlinePage
  ]);
});

Scenario('The /whose-application step has a radio button field', (
  I,
  whoseApplicationPage
) => {
  I.seeElements([
    whoseApplicationPage.representative,
    whoseApplicationPage.true,
    whoseApplicationPage.false
  ]);
});

Scenario('The /whose-application step shows error message when continuing without selecting an option', (
  I,
  whoseApplicationPage
) => {
  I.submitForm();
  I.seeErrors(whoseApplicationPage.representative);
});

Scenario('When any option is selected on the /apply-online step, you are taken to the /applicants-full-name step', (
  I,
  whoseApplicationPage,
  applicantsFullNamePage
) => {
  I.checkOption(whoseApplicationPage.false);
  I.submitForm();
  I.seeInCurrentUrl(applicantsFullNamePage.url);
});
