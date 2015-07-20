import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      // Hat tip to Yapp Labs, whose ember-cli-bourbon this addon is based off.
      { name: 'Ray' },
      { name: 'Kris' },
      { name: 'Chris' },
      { name: 'Luke' },
      { name: 'Dave' }
    ];
  }
});
