'use strict';

const content = require('../../content');

Feature('On the Track application section, the /apply-online step has the correct fields, validation and forking');

Before((I) => {
  I.amOnPage(content['what-enquiry'].url);
  I.checkOption({id: content['what-enquiry'].fields.id['track-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['apply-online'].url);
  I.checkOption({id: content['apply-online'].fields.id.no});
  I.click(content.common.buttons.continue);
  I.amOnPage('track-application/whose-application');
});

Scenario('The /whose-application step has a radio button field', (I) => {
  I.see(content['whose-application'].fields.label);
  I.seeElement({id: content['whose-application'].fields.id['my-application']});
  I.seeElement({id: content['whose-application'].fields.id['someone-elses-application']});
});

Scenario('The /whose-application step shows error message when continuing without selecting an option', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('When any option is selected on the /apply-online step, you are taken to the /applicants-full-name step', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
});
