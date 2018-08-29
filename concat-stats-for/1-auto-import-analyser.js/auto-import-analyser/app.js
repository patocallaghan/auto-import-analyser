define('auto-import-analyser/app', ['exports', 'auto-import-analyser/resolver', 'ember-load-initializers', 'auto-import-analyser/config/environment', 'lodash'], function (exports, _resolver, _emberLoadInitializers, _environment, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  console.log(_lodash.default);
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});