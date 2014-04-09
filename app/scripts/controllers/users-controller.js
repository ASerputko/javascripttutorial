/*global define*/
define([
    'underscore',
    'jquery',
    'config/app',
    'controllers/application-controller',
    'collections/user',
    'views/users/signup-view',
    'views/users/show-view'
], function (_, $, config, ApplicationController, UserCollection, SignupView, ShowView) {
    'use strict';

    var UsersController, instance;

    UsersController = function () {
        if (instance) {
            return instance;
        }
        instance = this;

        ApplicationController.prototype.constructor.call(this);

        this.userCollection = new UserCollection([{id: 1, name: 'Andrii', email: 'aserputko@gmail.com'}]);
        this.views.signup = new SignupView();
        this.views.show = new ShowView();
    };

    UsersController.prototype = {

        signup: function () {
            this.setView(this.views.signup);
        },

        show: function (id) {
            var user = this.userCollection.get(id) || (new this.userCollection.model());
            this.setView(this.views.show, {model: user});
        },

        setView: function (view, oprions) {
            this.view = view;
            _.extend(this.view, oprions);
            this.view.startListening();
            this.el.append(this.view.render().el);
        },

        stop: function () {
            if (this.view) {
                this.view.stopListening();
                this.view.remove();
            }
        }
    };

    return UsersController;
});