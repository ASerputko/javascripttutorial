/*global define*/
define(function (require) {
    'use strict';

    var Backbone;

    Backbone = require('backbone');

    return Backbone.Model.extend({

        defaults: {
            name: '',
            email: ''
        },

        getName: function () {
            return this.get('name');
        },

        setName: function (value, options) {
            this.set('name', value, options);
        },

        getEmail: function () {
            return this.get('email');
        },

        setEmail: function (value, options) {
            this.set('email', value, options);
        }

    });

});