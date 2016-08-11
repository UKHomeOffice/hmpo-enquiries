'use strict';

Feature('Enquiry Type');

const APPLICATION_ENQUIRY = require('../application-enquiry/content').name;
const APPLICATION_PROGRESS = require('../application-progress/content').name;
const CONTACT_US = require('../contact-us/content').name;
const FEEDBACK = require('../feedback/content').name;
const REQUEST_DECLARATION = require('../request-declaration/content').name;
const TRACK_APPLICATION = require('../track-application/content').name;

Before((
  I,
  enquiryTypePage
) => {
  I.visitPage(enquiryTypePage);
});

Scenario('The correct form elements are present', (
  I,
  enquiryTypePage
) => {
  I.seeElements([
    enquiryTypePage['enquiry-type'],
    enquiryTypePage.track,
    enquiryTypePage.replace,
    enquiryTypePage.progress,
    enquiryTypePage.enquiry,
    enquiryTypePage.feedback,
    enquiryTypePage.contact
  ]);
});

Scenario('Error message shows when continuing without selecting an option', (
  I,
  enquiryTypePage
) => {
  I.submitForm();
  I.seeErrors(enquiryTypePage['enquiry-type']);
});

Scenario('When Track a passport application is selected, you are taken to the /track-application journey', (
  I,
  enquiryTypePage
) => {
  enquiryTypePage.checkOptionAndSubmit('track');
  I.seeInCurrentUrl(TRACK_APPLICATION);
});

Scenario('When Request a replacement declaration is selected, you are taken to the /request-declaration journey', (
  I,
  enquiryTypePage
) => {
  enquiryTypePage.checkOptionAndSubmit('replace');
  I.seeInCurrentUrl(REQUEST_DECLARATION);
});

Scenario('When Enquire about a application in progress is selected, you are taken to the /application-progress journey', (
  I,
  enquiryTypePage
) => {
  enquiryTypePage.checkOptionAndSubmit('progress');
  I.seeInCurrentUrl(APPLICATION_PROGRESS);
});

Scenario('When Make passport application enquiry is selected, you are taken to the /application-enquiry journey', (
  I,
  enquiryTypePage
) => {
  enquiryTypePage.checkOptionAndSubmit('enquiry');
  I.seeInCurrentUrl(APPLICATION_ENQUIRY);
});

Scenario('When Make a complaint or leave feedback is selected, you are taken to the /feedback journey', (
  I,
  enquiryTypePage
) => {
  enquiryTypePage.checkOptionAndSubmit('feedback');
  I.seeInCurrentUrl(FEEDBACK);
});

Scenario('When Contact us is selected, you are taken to the /contact-us journey', (
  I,
  enquiryTypePage
) => {
  enquiryTypePage.checkOptionAndSubmit('contact');
  I.seeInCurrentUrl(CONTACT_US);
});
