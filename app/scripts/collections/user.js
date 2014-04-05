/*global define*/
define(function (require) {
    'use strict';

    var Backbone, Model;

    Backbone = require('backbone');
    Model = require('models/user');

    return Backbone.Collection.extend({

        model: Model,

        url: 'users',

        sync: function (methos, collection, options) {
            options.success(collection.toJSON());
        },

        findBy: function (key, value) {
            var attributes = {};
            attributes[key] = value;
            return this.where(attributes);
        },

        findByName: function (email) {
            return this.findBy('email', email);
        },

        findByEmail: function (email) {
            return this.findBy('email', email);
        }

    });

});