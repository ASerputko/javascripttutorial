/*global define*/
define(['jquery',
    'config',
    'controllers/application-controller',
    'views/static-pages/home-view',
    'views/static-pages/help-view',
    'views/static-pages/about-view',
    'views/static-pages/contact-view'
], function ($, config, ApplicationController, HomeView, HelpView, AboutView, ContactView) {
    'use strict';

    var StaticPagesController, instance;

    StaticPagesController = function () {
        if (instance) {
            return instance;
        }
        instance = this;

        ApplicationController.prototype.constructor.call(this);

        this.views.home = new HomeView();
        this.views.help = new HelpView();
        this.views.about = new AboutView();
        this.views.contact = new ContactView();
    };

    StaticPagesController.prototype = {

        home: function () {
            this.setView(this.views.home);
        },

        help: function () {
            this.setView(this.views.help);
        },

        about: function () {
            this.setView(this.views.about);
        },

        contact: function () {
            this.setView(this.views.contact);
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

    return StaticPagesController;
});