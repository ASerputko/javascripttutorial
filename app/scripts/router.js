/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        StaticPagesController = require('controllers/static-pages-controller'),
        routes = require('routes'),
        instance,
        Router;

    Router = Backbone.Router.extend({

        initialize: function () {
            this.controllers = {};
            this.controllers['static-pages-controller'] = new StaticPagesController();

            this.routes = {};
            this.routes[''] = routes.home.action;
            this.routes[routes.home.path] = routes.home.action;
            this.routes[routes.help.path] = routes.help.action;
            this.routes[routes.about.path] = routes.about.action;

            this._bindRoutes();
        },

        home: function () {
            this.controllers['static-pages-controller'].home();
        },

        help: function () {
            this.controllers['static-pages-controller'].help();
        },

        about: function () {
            this.controllers['static-pages-controller'].about();
        }
    });

    return function (options) {
        if (instance) {
            return instance;
        }
        instance = new Router(options);
        Backbone.history.start();
    };
});