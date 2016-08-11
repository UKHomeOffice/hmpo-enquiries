'use strict';

module.exports = class Navigation extends Helper {
  refreshPage() {
    this.helpers.WebDriverIO.browser.refresh();
  }
};
