'use strict';

describe('Service: serviceURL', function () {

  // load the service's module
  beforeEach(module('userdirectoryclientApp'));

  // instantiate service
  var serviceURL;
  beforeEach(inject(function (_serviceURL_) {
    serviceURL = _serviceURL_;
  }));

  it('should do something', function () {
    expect(!!serviceURL).toBe(true);
  });

});
