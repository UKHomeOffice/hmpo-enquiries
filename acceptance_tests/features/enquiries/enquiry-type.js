'use strict';

const content = require('../../content');

Feature('The /enquiry-type step has the correct fields, validation and forking');

Before((I) => {
  I.amOnPage(content['what-enquiry'].url);
  I.see(content['what-enquiry'].header);
});

Scenario('The /enquiry-type step has a radio input fields', (I) => {
  I.seeElement({id: content['what-enquiry'].fields.id['track-application']});
  I.seeElement({id: content['what-enquiry'].fields.id.replace});
  I.seeElement({id: content['what-enquiry'].fields.id.progress});
  I.seeElement({id: content['what-enquiry'].fields.id.enquiry});
  I.seeElement({id: content['what-enquiry'].fields.id.feedback});
  I.seeElement({id: content['what-enquiry'].fields.id.contact});
});

Scenario('The /enquiry-type step shows error message when continuing without selecting an option', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('When Track a passport application is selected, you are taken to the /track-application/apply-online step', (I) => {
  I.checkOption({id: content['what-enquiry'].fields.id['track-application']});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['apply-online'].url);
});

// eslint-disable-next-line max-len
Scenario('When Request a replacement declaration is selected, you are taken to the /request-declaration step', (I) => {
  I.checkOption({id: content['what-enquiry'].fields.id.replace});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['request-declaration'].url);
});

// eslint-disable-next-line max-len
Scenario('When Enquire about a application in progress is selected, you are taken to the /application-progress step', (I) => {
  I.checkOption({id: content['what-enquiry'].fields.id.progress});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['application-progress'].url);
});

// eslint-disable-next-line max-len
Scenario('When Make passport application enquiry is selected, you are taken to the /application-enquiry step', (I) => {
  I.checkOption({id: content['what-enquiry'].fields.id.enquiry});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['application-enquiry'].url);
});

Scenario('When Make a complaint or leave feedback is selected, you are taken to the /feedback step', (I) => {
  I.checkOption({id: content['what-enquiry'].fields.id.feedback});
  I.click(content.common.buttons.continue);
  I.amOnPage(content.feedback.url);
});

Scenario('When Contact us is selected, you are taken to the /contact-us step', (I) => {
  I.checkOption({id: content['what-enquiry'].fields.id.contact});
  I.click(content.common.buttons.continue);
  I.amOnPage(content['contact-us'].url);
});
