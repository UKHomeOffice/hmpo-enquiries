'use strict';

Feature('Error messages appear when going through the form when step invalid');

Scenario('Error message appears on the /whose-application step when continue is clicked without an option', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Track a passport application');
  I.click('Continue');
  I.amOnPage('track-application/apply-online');
  I.see('Did you apply online?');
  I.checkOption('No');
  I.click('Continue');
  I.see('Whose passport application is your enquiry about?');
  I.click('Continue');
  I.see('Please fix the following error');
});

Scenario('Error message appears on the /applicants-full-name step when continue is clicked without any data ', (I) => {
  I.amOnPage('/');
  I.see('Type of enquiry');
  I.checkOption('Track a passport application');
  I.click('Continue');
  I.amOnPage('track-application/apply-online');
  I.see('Did you apply online?');
  I.checkOption('No');
  I.click('Continue');
  I.see('Whose passport application is your enquiry about?');
  I.checkOption('My passport application');
  I.click('Continue');
  I.see('What\'s your full name?');
  I.click('Continue');
  I.see('Please fix the following error');
});
