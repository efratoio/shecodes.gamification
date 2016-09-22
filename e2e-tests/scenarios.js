'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /milestones when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/milestones");
  });


  describe('milestones', function() {

    beforeEach(function() {
      browser.get('index.html#!/milestones');
    });


    it('should render milestones when user navigates to /milestones', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('stage', function() {

    beforeEach(function() {
      browser.get('index.html#!/stage');
    });


    it('should render stage when user navigates to /stage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
