'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Send Replacement');

Before((
  I,
  howToReceivePage
) => {
  I.visitPage(howToReceivePage, steps);
});

Scenario('The correct form elements are present', (
  I,
  howToReceivePage
) => {
  I.seeElements([
    howToReceivePage['post-replacement'],
    howToReceivePage.true,
    howToReceivePage.false
  ]);
});

Scenario('An error is shown if how-to-receive is not completed', (
  I,
  howToReceivePage
) => {
  I.submitForm();
  I.seeErrors(howToReceivePage['post-replacement']);
});

Scenario('When I select any option I am taken to the applicants-full-name step', (
  I,
  howToReceivePage,
  applicantsFullNamePage
) => {
  I.checkOption(howToReceivePage.false);
  I.submitForm();
  I.seeInCurrentUrl(applicantsFullNamePage.url);
});
