/* global define, describe, it, should */
define(function () {
    'use strict';

    describe('User', function () {
        it('add some examples to (or delete)');
        it('should respond to "name"');
        it('should respond to "email"');
        it('should be valid');


        describe('when name is not present', function () {
            it('should not be valid');
        });

        describe('when name is too long', function () {
            it('should not be valid');
        });

        describe('when email format is invalid', function () {
            it('should not be valid');
        });

        describe('when email format is valid', function () {
            it('should be valid');
        });

        describe('when email address is already taken', function () {
            it('should not be valid');
        });

    });
});
