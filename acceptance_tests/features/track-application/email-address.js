'use strict';

const content = require('../../content');

Feature('On the Track application section, the /email-address step has the correct fields, validation and forking');

Before((I) => {
  I.amOnPage(content['what-enquiry'].url);
  I.checkOption({id: content['what-enquiry'].fields.id['track-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['apply-online'].url);
  I.checkOption({id: content['apply-online'].fields.id.no});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['whose-application'].url);
});

Scenario('The /email-address step has a input-text field', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.see(content['email-address'].fields.label);
  I.seeElement(content['email-address'].fields.id);
});

Scenario('The /email-address step shows the hint when My passport application is selected', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.see(content['email-address'].fields.hint);
});

Scenario('The /email-address step doesn\'t show the hint when Someone else\'s application is selected', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['someone-elses-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.address.url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-dob'].url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['representatives-full-name'].url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.relationship.url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.dontSee(content['email-address'].fields.hint);
});

Scenario('The /email-address step shows error message when continuing without filling in the field', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

Scenario('The /email-address step shows error message when invalid email address entered', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.fillField(content['email-address'].fields.id, content['email-address'].text['invalid-email']);
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('The /email-address step takes you to the /address step when My passport is selected in the /whose-application step', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['my-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.fillField(content['email-address'].fields.id, content['email-address'].text['valid-email']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.address.url);
});

// eslint-disable-next-line max-len
Scenario('The /email-address step takes you to the /confirm step when Someone else\'s passport is selected in the /whose-application step', (I) => {
  I.checkOption({id: content['whose-application'].fields.id['someone-elses-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-full-name'].url);
  I.fillField(content['applicants-full-name'].fields.id, content['applicants-full-name'].text.name);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['ref-number'].url);
  I.fillField(content['ref-number'].fields.id['number-input'], content['ref-number'].text['ref-number']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.address.url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['applicants-dob'].url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['representatives-full-name'].url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.relationship.url);
  I.click(content.common.buttons.continue);
  I.amOnPage(content['email-address'].url);
  I.fillField(content['email-address'].fields.id, content['email-address'].text['valid-email']);
  I.click(content.common.buttons.continue);
  I.amOnPage(content.confirm.url);
});
