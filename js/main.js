require.config({
  paths : {
    'jquery'         : 'lib/jquery-1.9.1',
    'jquery-cookie'  : 'lib/jquery.cookie',
    'jquery-timeago' : 'lib/jquery.timeago',
    'handlebars'     : 'lib/handlebars',
    'hbs'            : 'lib/hbs',
    'ember'          : 'lib/ember-1.0.0-rc.1',
    'ember-data'     : 'lib/ember-data',
    'pusher'         : 'lib/pusher',
    'ext'            : 'app/ext',
    'store'          : 'app/store',
    'models'         : 'app/models',
    'views'          : 'app/views',
    'controllers'    : 'app/controllers',
    'routes'         : 'app/routes',
    'templates'      : 'app/templates'
  },
  shim  : {
    'jquery-cookie'  : ['jquery'],
    'jquery-timeago' : ['jquery'],
    'handlebars'     : {
      exports : 'Handlebars'
    },
    'ember'          : {
      deps    : ['jquery', 'handlebars'],
      exports : 'Ember'
    },
    'ember-data'     : {
      deps    : ['jquery', 'ember'],
      exports : 'DS'
    },
    'pusher'         : {
      exports : 'Pusher'
    }
  },
  hbs   : {
    templateExtension : 'hbs',
    baseDir           : 'templates'
  }
});

require([
  'app/travis',
  'app/utils'
], function (travis, utils) {
  travis.bootstrap();
  utils.debug('main::> App successfully started!');
});