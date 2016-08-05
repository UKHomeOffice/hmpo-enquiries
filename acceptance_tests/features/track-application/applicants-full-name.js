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
  I.amOnPage(content['whose-application'].url);
});

// eslint-disable-next-line max-len
Scenario('The /applicants-full-name step shows the correct field label and hint when My passport application is selected', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.see(content['applicants-full-name'].fields.label['no-rep']);
  I.see(content['applicants-full-name'].fields.hint);
});

// eslint-disable-next-line max-len
Scenario('The /applicants-full-name step shows the correct field label and no hint when Someone else\'s passport application is selected', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['someone-elses-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.see(content['applicants-full-name'].fields.label.rep);
});

Scenario('The /applicants-full-name step has a input-text field', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.seeElement(content['applicants-full-name'].fields.id);
});

Scenario('The /applicants-full-name step shows error message when continuing without filling in the field', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

Scenario('The /applicants-full-name step takes you to the /ref-number step', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
});
