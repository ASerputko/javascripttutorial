/*global define*/
define(['jquery',
    'config/app',
    'controllers/application-controller',
    'views/users/signup-view'
], function ($, config, ApplicationController, SignupView) {
    'use strict';

    var UsersController, instance;

    UsersController = function () {
        if (instance) {
            return instance;
        }
        instance = this;

        ApplicationController.prototype.constructor.call(this);

        this.views.signup = new SignupView();
    };

    UsersController.prototype = {

        signup: function () {
            this.setView(this.views.signup);
        },

        setView: function (view) {
            this.view = view;
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