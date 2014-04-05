/* global define, describe, it, should */
define(['collections/user'], function (UserCollection) {
    'use strict';

    before(function () {
        this.userCollection = new UserCollection();
    });

    after(function () {
        this.userCollection = null;
    });

    describe('UserCollection', function () {
        describe('creation', function () {
            it('has default values', function () {
                expect(this.userCollection).to.be.ok;
                expect(this.userCollection).to.have.length(0);
            });
            it('should be empty on fetch');
        });

        describe('modification', function () {

            beforeEach(function () {
                this.userCollection.create({
                    name: 'Test Name',
                    email: 'test-name@gmail.com'
                });
            });

            afterEach(function () {
                this.userCollection.reset();
            });

            it('has a single user', function (done) {
                var userCollection = this.userCollection, userModel;

                // After fetch.
                userCollection.once('reset', function () {
                    expect(userCollection).to.have.length(1);

                    // Check model attributes.
                    userModel = userCollection.at(0);
                    expect(userModel).to.be.ok;
                    expect(userModel.get('name')).to.contain('Name');
                    expect(userModel.get('email')).to.contain('test-name@gmail.com');

                    done();
                });

                userCollection.fetch({ reset: true });
            });

            it('can delete a user', function (done) {
                var userCollection = this.userCollection, userModel;

                // After shift.
                userCollection.once('remove', function () {
                    expect(userCollection).to.have.length(0);
                    done();
                });

                // Remove and return first model.
                userModel = userCollection.shift();
                expect(userCollection).to.be.ok;
            });
            it('can create a second user', function () {
                this.userCollection.create({
                    name: 'Test Name2',
                    email: 'test-name2@gmail.com'
                });
                expect(this.userCollection).to.have.length(2);
            });
        });
    });
});
