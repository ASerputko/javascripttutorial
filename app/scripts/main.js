require.config({
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

require(['router'], function (Router) {
    'use strict';

    var router = new Router();

});
