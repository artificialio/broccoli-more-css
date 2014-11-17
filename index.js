'use strict';
var Filter = require('broccoli-filter');
var moreCss = require('more-css');

function MoreCssFilter(inputTree, options) {
  if (!(this instanceof MoreCssFilter)) {
    return new MoreCssFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

MoreCssFilter.prototype = Object.create(Filter.prototype);
MoreCssFilter.prototype.constructor = MoreCssFilter;

MoreCssFilter.prototype.extensions = ['css'];
MoreCssFilter.prototype.targetExtension = 'css';

MoreCssFilter.prototype.processString = function (str) {
  if (this.options.radical === undefined) {
    this.options.radical = true;
  }
  return moreCss.compress(str, this.options.radical);
};

module.exports = MoreCssFilter;