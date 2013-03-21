define([
  'views/MainView',
  'ext/ember/handlebars',
  'hbs!about'
], function (MainView) {
  return MainView.extend({
    templateName      : 'about',
    attributeBindings : ['id'],
    'id'              : 'about'
  });
});