'use strict';

const content = require('../../content');

const PAGE = content['applicants-full-name'];
const FULL_NAME = PAGE.fields['applicants-full-name'];

Feature('Applicants Full Name step');

Before((I) => {
  I.amOnPage('/');
  I.setSessionSteps('track-application', [
    '/apply-online',
    '/whose-application'
  ]);
  I.amOnPage(PAGE.url);
});

// eslint-disable-next-line max-len
Scenario('The /applicants-full-name step shows the correct field label and hint when My passport application is selected', function *(I) {
  yield I.setSessionData('track-application', {
    representative: 'false'
  });
  I.amOnPage(PAGE.url);
  I.see(FULL_NAME.label['no-rep']);
  I.see(FULL_NAME.hint);
});

// eslint-disable-next-line max-len
Scenario('The /applicants-full-name step shows the correct field label and no hint when Someone else\'s passport application is selected', function *(I) {
  yield I.setSessionData('track-application', {
    representative: 'true'
  });
  I.amOnPage(PAGE.url);
  I.see(FULL_NAME.label.rep);
});

Scenario('The /applicants-full-name step has a input-text field', (I) => {
  I.seeElement(FULL_NAME.selector);
});

Scenario('The /applicants-full-name step shows error message when continuing without filling in the field', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

Scenario('The /applicants-full-name step takes you to the /ref-number step', (I) => {
  I.fillField(FULL_NAME.selector, FULL_NAME.value);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['ref-number'].url);
});
