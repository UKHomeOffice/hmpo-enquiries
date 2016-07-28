'use strict';

Feature('I am able to navigate through the form correctly');

Scenario('The page loads and I see the type of enquiry header', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
});

Scenario('When I select track a passport application then I am taken to the track application section', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Track a passport application');
  I.click('Continue');
  I.see('Track a passport application');
});

Scenario('When I select replacement declaration form then I am taken to the replacement declaration section', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Request a replacement declaration form');
  I.click('Continue');
  I.see('Request a replacement declaration form');
});

Scenario('When I select application in progress then I am taken to the application in progress section', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Enquire about a passport application in progress');
  I.click('Continue');
  I.see('Enquire about a passport application in progress');
});

Scenario('When I select make application enquiry then I am taken to the make application enquiry section', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Make a passport application enquiry');
  I.click('Continue');
  I.see('Make a passport application enquiry');
});

Scenario('When I select make a complaint or leave feedback then I am taken to the feedback section', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Make a complaint or leave feedback');
  I.click('Continue');
  I.see('Make a complaint or leave feedback');
});

Scenario('When I select contact us then I am taken to the contact us section', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Contact us');
  I.click('Continue');
  I.see('Contact us');
});
