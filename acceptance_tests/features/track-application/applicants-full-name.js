'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Track Application / Applicants Full Name');

Before((
  I,
  applicantsFullNamePage,
  applyOnlinePage,
  whoseApplicationPage
) => {
  I.visitPage(applicantsFullNamePage, JOURNEY_NAME, [
    applyOnlinePage,
    whoseApplicationPage
  ]);
});

Scenario('The correct form elements are present', (
  I,
  applicantsFullNamePage
) => {
  I.seeElements(applicantsFullNamePage['applicants-full-name']);
});

Scenario('I see the customer label if I am the customer', function *(
  I,
  applicantsFullNamePage
) {
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'false'
  });
  I.refreshPage();
  I.see(applicantsFullNamePage.label.customer);
});

Scenario('I see the representative label if I am the representative', function *(
  I,
  applicantsFullNamePage
) {
  yield I.setSessionData('track-application', {
    representative: 'true'
  });
  I.refreshPage();
  I.see(applicantsFullNamePage.label.representative);
});

Scenario('An error is shown if applicants-full-name is not completed', (
  I,
  applicantsFullNamePage
) => {
  I.submitForm();
  I.seeErrors(applicantsFullNamePage['applicants-full-name']);
});

Scenario('ON submitting the completed form I am taken to ref-number step', (
  I,
  applicantsFullNamePage,
  refNumberPage
) => {
  applicantsFullNamePage.fillFormAndSubmit();
  I.seeInCurrentUrl(refNumberPage.url);
});
