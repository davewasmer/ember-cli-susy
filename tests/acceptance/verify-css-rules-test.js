import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'dummy/tests/helpers/start-app';

var application;

module('Acceptance: Verify CSS Rules', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('check that susy and sass are generating css that is getting applied', function(assert) {
  visit('/');

  andThen(function() {
    var listItem = Ember.$('.devs li').first();
    var float = listItem.css('float');
    assert.equal(float, 'left', 'float');
  });
});
