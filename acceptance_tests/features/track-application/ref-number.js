'use strict';

const content = require('../../content');

const PAGE = content['ref-number'];
const REF_NUMBER = PAGE.fields['ref-number'];
const NO_REF_NUMBER = PAGE.fields['no-ref-number'];

Feature('Ref Number step');

Before((I) => {
  I.amOnPage('/');
  I.setSessionSteps('track-application', [
    '/apply-online',
    '/whose-application',
    '/applicants-full-name'
  ]);
  I.amOnPage(PAGE.url);
});

Scenario('The /ref-number step has a input-text field and checkbox field', (I) => {
  I.see(REF_NUMBER.label);
  I.see(NO_REF_NUMBER.label);
  I.seeElement(REF_NUMBER.selector);
  I.seeElement(NO_REF_NUMBER.selector);
});

Scenario('The /ref-number step shows error message when continuing without filling in the field', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('The /ref-number step takes you to the /email-address step when My passport is selected in the /whose-application step', function *(I) {
  yield I.setSessionData('track-application', {
    representative: 'false'
  });
  I.amOnPage(PAGE.url);
  I.fillField(REF_NUMBER.selector, REF_NUMBER.value);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['email-address'].url);
});

Scenario('If the no-ref-number checkbox is ticked, you can proceed without entering a ref number', (I) => {
  I.click(NO_REF_NUMBER.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['email-address'].url);
});

// eslint-disable-next-line max-len
Scenario('The /ref-number step takes you to the /address step when Someone else\'s passport is selected in the /whose-application step', function *(I) {
  yield I.setSessionData('track-application', {
    representative: 'true'
  });
  I.amOnPage(PAGE.url);
  I.fillField(REF_NUMBER.selector, REF_NUMBER.value);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content.address.url);
});
