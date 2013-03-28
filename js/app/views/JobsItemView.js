define([
  'ember',
  'ext/Helpers',
  'ext/TravisUrls'
], function (Ember, Helpers) {
  var JobsItemView = Ember.View.extend({
    tagName           : 'tr',
    classNameBindings : ['color'],
    repoBinding       : 'context.repo',
    jobBinding        : 'context',
    color             : function () {
      return Helpers.colorForState(this.get('job.state'));
    }.property('job.state')
  });
  return JobsItemView;
});