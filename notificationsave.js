var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for notification save', function () {
        it('notification saved', function (done) {
                req.query('/notification/save', {
                        dateTime: new Date(), message: 'hi everyone',sendNow:'true', recepients: 'testGroup|testSubGroup', title: 'hi to all'}, '0ciuffzqvqwv', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        // assert.equal(data.success, true)
                        assert.equal(output, 200)
                        done();
                })
        })
        it('missing some fields', function (done) {
                req.query('/notification/save', {
                         message: 'hi everyone',sendNow:'true', recepients: 'testGroup|testSubGroup', title: 'hi to all'}, '0ciuffzqvqwv', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                         assert.equal(data.success, false)
                        assert.equal(output, 400)
                        done();
                })
        })
        it('Error in token', function (done) {
                req.query('/notification/save', {
                        dateTime: new Date(), message: 'hi everyone',sendNow:'true', recepients: 'testGroup|testSubGroup', title: 'hi to all'}, '0ciuffzqvqw', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                         assert.equal(data.success, false)
                        assert.equal(output,401)
                        done();
                })
        })
        it('Error in database', function (done) {
                req.query('/notification/save', {
                        dateTime: new Date(), message: 'hi everyone',sendNow:'tru', recepients: 'testGroup|testSubGroup', title: 'hi to all'}, '0ciuffzqvqwv', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, false)
                        assert.equal(output, 503)
                        done();
                })
        })
        it('Error in recepients', function (done) {
                req.query('/notification/save', {
                        dateTime: new Date(), message: 'hi everyone',sendNow:'true', recepients: 'testGroup|testSubGrou', title: 'hi to all'}, '0ciuffzqvqwv', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, false)
                        assert.equal(output, 404)
                        done();
                })
        })
        it('Error in path', function (done) {
                req.query('/notification/sav', {
                        dateTime: new Date(), message: 'hi everyone',sendNow:'true', recepients: 'testGroup|testSubGrou', title: 'hi to all'}, '0ciuffzqvqwv', function (err, res, body) {
                        var output = res.statusCode;
                        assert.equal(output, 404)
                        done();
                })
        })
});