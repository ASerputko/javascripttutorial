/* global define, describe, it, should */
define(['config/app'], function (congig) {
    'use strict';

    describe('Application config', function () {
        it('version should be correct', function() {
            should.equal('0.0.1', congig.version);
        });
    });
});
