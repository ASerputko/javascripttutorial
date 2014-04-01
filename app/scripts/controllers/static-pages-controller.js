/*global define*/
define(['jquery',
    'config',
    'views/static-pages/home-view',
    'views/static-pages/help-view',
    'views/static-pages/about-view'
], function ($, config, HomeView, HelpView, AboutView) {
    'use strict';

    var StaticPagesController, instance;

    StaticPagesController = function () {
        if (instance) {
            return instance;
        }
        instance = this;

        this.view = null;
        this.el = $(config.el);

        this.views = {};
        this.views.home = new HomeView({el: this.el});
        this.views.help = new HelpView({el: this.el});
        this.views.about = new AboutView({el: this.el});
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

        setView: function (view) {
            if (this.view) {
                this.view.stopListening();
                this.view.remove();
            }
            this.view = view;
            this.view.startListening();
            this.view.render();
        }
    };

    return StaticPagesController;
});