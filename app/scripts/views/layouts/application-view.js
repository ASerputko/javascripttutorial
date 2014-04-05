/*global define*/
define(function (require) {
    'use strict';

    var Backbone, JST, routes;

    Backbone = require('backbone');
    JST = require('templates');
    routes = require('config/routes');

    return Backbone.View.extend({

        templateOptions: {
            header: JST['app/scripts/templates/layouts/header-template.ejs'],
            footer: JST['app/scripts/templates/layouts/footer-template.ejs'],
            routes: routes
        },

        template: JST['app/scripts/templates/layouts/application-template.ejs'],

        startListening: function () {},

        stopListening: function () {},

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

});