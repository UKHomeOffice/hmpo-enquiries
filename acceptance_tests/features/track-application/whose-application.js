'use strict';

const content = require('../../content');

const PAGE = content['whose-application'];
const REPRESENTATIVE = PAGE.fields.representative;

Feature('Whose Application step');

Before((I) => {
  I.amOnPage('/');
  I.setSessionSteps('track-application', [
    '/apply-online'
  ]);
  I.amOnPage(PAGE.url);
});

Scenario('The /whose-application step has a radio button field', (I) => {
  I.see(REPRESENTATIVE.label);
  I.see(REPRESENTATIVE.options.true.label);
  I.see(REPRESENTATIVE.options.false.label);
  I.seeElement(REPRESENTATIVE.options.true.selector);
  I.seeElement(REPRESENTATIVE.options.false.selector);
});

Scenario('The /whose-application step shows error message when continuing without selecting an option', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('When any option is selected on the /apply-online step, you are taken to the /applicants-full-name step', (I) => {
  I.checkOption(REPRESENTATIVE.options.false.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['applicants-full-name'].url);
});
