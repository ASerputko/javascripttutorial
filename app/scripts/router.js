/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        StaticPagesController = require('controllers/static-pages-controller'),
        UsersController = require('controllers/users-controller'),
        routes = require('config/routes'),
        instance,
        Router;

    Router = Backbone.Router.extend({

        currentController: null,

        initialize: function () {
            this.controllers = {};
            this.controllers['static-pages-controller'] = new StaticPagesController();
            this.controllers['users-controller'] = new UsersController();

            this.routes = {};
            this.routes[''] = routes.home.action;
            this.routes[routes.home.path] = routes.home.action;
            this.routes[routes.help.path] = routes.help.action;
            this.routes[routes.about.path] = routes.about.action;
            this.routes[routes.signup.path] = routes.signup.action;
            this.routes[routes.contact.path] = routes.contact.action;

            this._bindRoutes();
        },

        runController: function (controller, action) {
            if (this.currentController) {
                this.currentController.stop();
            }
            this.currentController = controller;
            this.currentController[action]();
        },

        home: function () {
            this.runController(this.controllers['static-pages-controller'], 'home');
        },

        help: function () {
            this.runController(this.controllers['static-pages-controller'], 'help');
        },

        about: function () {
            this.runController(this.controllers['static-pages-controller'], 'about');
        },

        contact: function () {
            this.runController(this.controllers['static-pages-controller'], 'contact');
        },

        signup: function () {
            this.runController(this.controllers['users-controller'], 'signup');
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