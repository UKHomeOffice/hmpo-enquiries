'use strict';

const content = require('../../content');

const PAGE = content['what-enquiry'];
const ENQUIRY = PAGE.fields.enquiry;

Feature('The /enquiry-type step has the correct fields, validation and forking');

Before((I) => {
  I.amOnPage(PAGE.url);
  I.see(PAGE.header);
});

Scenario('The /enquiry-type step has radio input fields', (I) => {
  I.see(ENQUIRY.legend);
  I.see(ENQUIRY.options.track.label);
  I.see(ENQUIRY.options.replace.label);
  I.see(ENQUIRY.options.progress.label);
  I.see(ENQUIRY.options.enquiry.label);
  I.see(ENQUIRY.options.feedback.label);
  I.see(ENQUIRY.options.contact.label);
  I.seeElement(ENQUIRY.options.track.selector);
  I.seeElement(ENQUIRY.options.replace.selector);
  I.seeElement(ENQUIRY.options.progress.selector);
  I.seeElement(ENQUIRY.options.enquiry.selector);
  I.seeElement(ENQUIRY.options.feedback.selector);
  I.seeElement(ENQUIRY.options.contact.selector);
});

Scenario('The /enquiry-type step shows error message when continuing without selecting an option', (I) => {
  I.click(content.common.buttons.continue);
  I.see(content.common.error);
});

// eslint-disable-next-line max-len
Scenario('When Track a passport application is selected, you are taken to the /track-application/apply-online step', (I) => {
  I.checkOption(ENQUIRY.options.track.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['apply-online'].url);
});

// eslint-disable-next-line max-len
Scenario('When Request a replacement declaration is selected, you are taken to the /request-declaration step', (I) => {
  I.checkOption(ENQUIRY.options.replace.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['request-declaration'].url);
});

// eslint-disable-next-line max-len
Scenario('When Enquire about a application in progress is selected, you are taken to the /application-progress step', (I) => {
  I.checkOption(ENQUIRY.options.progress.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['application-progress'].url);
});

// eslint-disable-next-line max-len
Scenario('When Make passport application enquiry is selected, you are taken to the /application-enquiry step', (I) => {
  I.checkOption(ENQUIRY.options.enquiry.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['application-enquiry'].url);
});

Scenario('When Make a complaint or leave feedback is selected, you are taken to the /feedback step', (I) => {
  I.checkOption(ENQUIRY.options.feedback.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content.feedback.url);
});

Scenario('When Contact us is selected, you are taken to the /contact-us step', (I) => {
  I.checkOption(ENQUIRY.options.contact.selector);
  I.click(content.common.buttons.continue);
  I.seeInCurrentUrl(content['contact-us'].url);
});
