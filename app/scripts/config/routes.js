/*global define*/
define(function () {
    'use strict';

    return {
        root: {path: 'home', action: 'home'},
        home: {path: 'home', action: 'home'},
        help: {path: 'help', action: 'help'},
        about: {path: 'about', action: 'about'},
        signup: {path: 'signup', action: 'signup'},
        userShow: {path: 'user/:id', action: 'userShow'},
        contact: {path: 'contact', action: 'contact'}
    };

});