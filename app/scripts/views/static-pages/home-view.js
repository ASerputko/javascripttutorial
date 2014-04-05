/*global define*/
define(function (require) {
    'use strict';

    var ApplicationView, JST, routes;

    ApplicationView = require('views/layouts/application-view');
    JST = require('templates');
    routes = require('config/routes');

    return ApplicationView.extend({

        template: JST['app/scripts/templates/static-pages/home-template.ejs'],
        
        render: function () {
            this.templateOptions.body = this.template(routes);
            var html = ApplicationView.prototype.template(this.templateOptions);
            this.$el.html(html);
            return this;
        }

    });

});