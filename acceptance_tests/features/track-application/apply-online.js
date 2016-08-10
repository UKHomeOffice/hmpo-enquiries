'use strict';

const content = require('../../content');

const PAGE = content['apply-online'];
const APPLY_ONLINE = PAGE.fields['apply-online'];

Feature('Apply online step');

Before((I) => {
  I.amOnPage('/');
  I.amOnPage(PAGE.url);
});

Scenario('The /apply-online step has a radio button field', (I) => {
  I.see(APPLY_ONLINE.label);
  I.see(APPLY_ONLINE.options.yes.label);
  I.see(APPLY_ONLINE.options.no.label);
  I.seeElement(APPLY_ONLINE.options.yes.selector);
  I.seeElement(APPLY_ONLINE.options.no.selector);
});

Scenario('The /apply-online step shows error message when continuing without selecting an option', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

Scenario('When Yes is selected on the /apply-online step, you are taken to the /track-online step', (I) => {
  I.checkOption(APPLY_ONLINE.options.yes.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['track-online'].url);
});

Scenario('When No is selected on the /apply-online step, you are taken to the /whose-application step', (I) => {
  I.checkOption(APPLY_ONLINE.options.no.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['whose-application'].url);
});
