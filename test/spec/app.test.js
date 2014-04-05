/* global define, describe, it, should */
define(['config/app'], function (congig) {
    'use strict';

    describe('Application config', function () {
    	it('VERSION should be "0.0.2"', function() {
            expect(congig.version).to.equal('0.0.2');
        });

        it('container EL name should be "body"', function() {
            expect(congig.el).to.equal('body');
        });

        it('ENV should be "dev"', function() {
            expect(congig.env).to.equal('dev');
        });
    });
});
