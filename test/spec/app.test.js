/* global define, describe, it, should */
define(['config/app'], function (congig) {
    'use strict';

    describe('Application config', function () {
        it('container EL name should be "body"', function() {
            should.equal('body', congig.el);
        });

        it('ENV should be "dev"', function() {
            should.equal('dev', congig.env);
        });
    });
});
