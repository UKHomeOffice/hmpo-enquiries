'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Request a replacement declaration form / Whose Application');

Before((
  I,
  whoseApplicationPage,
  replacementFormPage
) => {
  I.visitPage(whoseApplicationPage, JOURNEY_NAME, [
    replacementFormPage
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

Scenario('When I select any option I am taken to the send-replacement step', (
  I,
  whoseApplicationPage,
  sendReplacementPage
) => {
  I.checkOption(whoseApplicationPage.false);
  I.submitForm();
  I.seeInCurrentUrl(sendReplacementPage.url);
});
