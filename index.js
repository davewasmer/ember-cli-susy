/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-susy',
  treeForStyles: function() {
    var susyPath = path.join(this.app.bowerDirectory, 'susy', 'sass');
    var susyTree = new Funnel(this.treeGenerator(susyPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return susyTree;
  }
};
