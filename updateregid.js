var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for UpdateRegId', function () {
    it('UpdateingRegId', function (done) {
        req.query('/updateRegID','newID=localweb', 'qpjbt4eexq', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, true)
            assert.equal(output, 200)
            done();
        })
    })
    it('UpdateingRegId with newid as null', function (done) {
        req.query('/updateRegID',null, 'qpjbt4eexq', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 400)
            done();
        })
    })
    it('UpdateingRegId with in valid token', function (done) {
        req.query('/updateRegID',null, 'qpjbt4eexq1', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 401)
            done();
        })
    })
    it('UpdateingRegId with in new id and token as null', function (done) {
        req.query('/updateRegID','newID=localweb', null, function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrct path', function (done) {
        req.query('/updateRegI','newID=localweb', null, function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
})