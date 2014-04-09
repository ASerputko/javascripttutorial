/*global define*/
define(function (require) {
    'use strict';

    var ApplicationView, JST;

    ApplicationView = require('views/layouts/application-view');
    JST = require('templates');

    return ApplicationView.extend({

        template: JST['app/scripts/templates/users/show-template.ejs'],
        
        render: function () {debugger
            this.templateOptions.body = this.template({model: this.model});
            var html = ApplicationView.prototype.template(this.templateOptions);
            this.$el.html(html);
            return this;
        }

    });

});