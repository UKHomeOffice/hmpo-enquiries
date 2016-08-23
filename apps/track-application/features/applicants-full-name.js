'use strict';

const steps = require('../');

Feature('Track Application / Applicants Full Name');

Before((
  I,
  applicantsFullNamePage
) => {
  I.visitPage(applicantsFullNamePage, steps);
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
  yield I.setSessionData(steps.name, {
    representative: 'false'
  });
  yield I.refreshPage();
  I.see(applicantsFullNamePage.label.customer);
});

Scenario('I see the representative label if I am the representative', function *(
  I,
  applicantsFullNamePage
) {
  yield I.setSessionData(steps.name, {
    representative: 'true'
  });
  yield I.refreshPage();
  I.see(applicantsFullNamePage.label.representative);
});

Scenario('An error is shown if applicants-full-name is not completed', (
  I,
  applicantsFullNamePage
) => {
  I.submitForm();
  I.seeErrors(applicantsFullNamePage['applicants-full-name']);
});

Scenario('On submitting the completed form I am taken to ref-number step', (
  I,
  applicantsFullNamePage,
  refNumberPage
) => {
  applicantsFullNamePage.fillFormAndSubmit();
  I.seeInCurrentUrl(refNumberPage.url);
});
