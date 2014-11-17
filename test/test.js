'use strict';

var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
  rimraf.sync('test/actual');
});

it('should minimize CSS without radical as expected', function () {
  assert.equal(
    fs.readFileSync('test/actual/fixture.css', 'utf8'),
    fs.readFileSync('test/fixtures/expected.radical.css', 'utf8').trim()
  );
});
