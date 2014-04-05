/* global define */
define([
    // All your tests go here.
    'spec/app.test',
    'spec/models/user.test',
    'spec/collections/user.test'
], function () {
    'use strict';

    window.console = window.console || function() {}; // protect from barfs
    window.notrack = true; // don't track
    window.mocha.run(); // kickoff the runner
});