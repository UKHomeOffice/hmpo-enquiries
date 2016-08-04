'use strict';

const content = require('../../content');

Feature('On the Track application section, the /ref-number step has the correct fields, validation and forking');

Before((I) => {
  I.amOnPage(content['what-enquiry'].url);
  I.checkOption({id: content['what-enquiry'].fields.id['track-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['apply-online'].url);
  I.checkOption({id: content['apply-online'].fields.id.no});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['whose-application'].url);
});

Scenario('The /ref-number step has a input-text field and checkbox field', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.see(content['ref-number'].fields.label);
  I.seeElement(content['ref-number'].fields.id['number-input']);
  I.seeElement(content['ref-number'].fields.id['no-number-checkbox']);
});

Scenario('The /ref-number step shows error message when continuing without filling in the field', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('The /ref-number step takes you to the /email-address step when My passport is selected in the /whose-application step', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
});

// eslint-disable-next-line max-len
Scenario('The /ref-number step takes you to the /address step when Someone else\'s passport is selected in the /whose-application step', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['someone-elses-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.address.url);
});
