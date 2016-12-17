import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    getUser() {
      return Promise.resolve({ name: 'Josh' });
    },

    getEvents() {
      return Promise.resolve([
        {
          name: 'foo',
          location: 'SF',
        },
        {
          name: 'bar',
          location: 'SV',
        }
      ]);
    }
  }
});
