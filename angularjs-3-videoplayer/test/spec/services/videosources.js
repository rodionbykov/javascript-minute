'use strict';

describe('Service: videosources', function () {

  // load the service's module
  beforeEach(module('angularjs3VideoplayerApp'));

  // instantiate service
  var videosources;
  beforeEach(inject(function (_videosources_) {
    videosources = _videosources_;
  }));

  it('should do something', function () {
    expect(!!videosources).toBe(true);
  });

});
