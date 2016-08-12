'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Apply online step');

Before((
  I,
  applyOnlinePage
) => {
  I.visitPage(applyOnlinePage, JOURNEY_NAME);
});

Scenario('The /apply-online step has a radio button field', (
  I,
  applyOnlinePage
) => {
  I.seeElements([
    applyOnlinePage['apply-online'],
    applyOnlinePage.yes,
    applyOnlinePage.no
  ]);
});

Scenario('The /apply-online step shows error message when continuing without selecting an option', (
  I,
  applyOnlinePage
) => {
  I.submitForm();
  I.seeErrors(applyOnlinePage['apply-online']);
});

Scenario('When Yes is selected on the /apply-online step, you are taken to the /track-online step', (
  I,
  applyOnlinePage,
  trackOnlinePage
) => {
  I.checkOption(applyOnlinePage.yes);
  I.submitForm();
  I.seeInCurrentUrl(trackOnlinePage.url);
});

Scenario('When No is selected on the /apply-online step, you are taken to the /whose-application step', (
  I,
  applyOnlinePage,
  whoseApplicationPage
) => {
  I.checkOption(applyOnlinePage.no);
  I.submitForm();
  I.seeInCurrentUrl(whoseApplicationPage.url);
});
