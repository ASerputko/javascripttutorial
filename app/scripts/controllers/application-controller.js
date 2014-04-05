/*global define*/
define([
    'jquery',
    'config/app'
], function ($, config) {
    'use strict';

    var ApplicationController;

    ApplicationController = function () {
        this.view = {};
        this.el = $(config.el);

        this.views = {};
    };

    return ApplicationController;
});