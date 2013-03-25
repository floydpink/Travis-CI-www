define([
  'ember',
  'app/utils'
], function (Ember, utils) {
  return Ember.Route.extend({
    setupController: function () {
      utils.debug('RepoIndexRoute::setupController:>');
      return this.container.lookup('controller:repo').activate('current');
    },
    renderTemplate : function () {
      utils.debug('RepoIndexRoute::renderTemplate:>');
      this.render('build', { controller: 'build', outlet: 'buildpane', into: 'repo'});
    }
  });
});