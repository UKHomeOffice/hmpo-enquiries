'use strict';

const content = require('../../content');

Feature('On the Track application section, the /apply-online step has the correct fields, validation and forking');

Before((I) => {
  I.amOnPage(content['what-enquiry'].url);
  I.checkOption({id: content['what-enquiry'].fields.id['track-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['apply-online'].url);
});

Scenario('The /apply-online step has a radio button field', (I) => {
  I.see(content['apply-online'].fields.label);
  I.seeElement({id: content['apply-online'].fields.id.yes});
  I.seeElement({id: content['apply-online'].fields.id.no});
});

Scenario('The /apply-online step shows error message when continuing without selecting an option', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

Scenario('When Yes is selected on the /apply-online step, you are taken to the /track-online step', (I) => {
  I.checkOption({id: content['apply-online'].fields.id.yes});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['track-online'].url);
});

Scenario('When No is selected on the /apply-online step, you are taken to the /whose-application step', (I) => {
  I.checkOption({id: content['apply-online'].fields.id.no});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['whose-application'].url);
});
