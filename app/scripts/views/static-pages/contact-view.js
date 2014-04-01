/*global define*/
define(function (require) {
    'use strict';

    var ApplicationView, JST;

    ApplicationView = require('views/layouts/application-view');
    JST = require('templates');

    return ApplicationView.extend({

        template: JST['app/scripts/templates/static-pages/contact-template.ejs'],
        
        render: function () {
            this.templateOptions.yield = this.template();
            var html = ApplicationView.prototype.template(this.templateOptions);
            this.$el.html(html);
            return this;
        }

    });

});