/*global define*/
define(function (require) {
    'use strict';

    var Backbone, JST;

    Backbone = require('backbone');
    JST = require('templates');

    return Backbone.View.extend({

        template: JST['app/scripts/templates/static-pages/home-template.ejs'],
        
        initialize: function () {},

        startListening: function () {},

        stopListening: function () {},

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

});