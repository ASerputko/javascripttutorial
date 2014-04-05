'use strict';

require.config({
    deps: ['main'],
    paths: {
        jquery: '../bower_components/jquery/jquery',
        lodash: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone'
    },
    shim: {
        'lodash': {
            exports: '_'
        },
        'backbone': {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        }
    }
});