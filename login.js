var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for login', function () {
    it('body with required parameters', function (done) {
        req.query('/login', { username: '23111998', password: 'venky@123',regid: 'localWebui'}, '', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,true)
            assert.equal(output, 200)
            done();
        })
    })
    it('body with some fields are missing', function (done) {
        req.query('/login', { username: '2311199' }, '', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
            assert.equal(data.success,false)
            assert.equal(output, 400)
            done();
        })
    })
    it('body with invalid username (or) password', function (done) {
        req.query('/login', { username: '2311199', password: 'venky@123' }, '', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
            assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('body with username and password as empty', function (done) {
        req.query('/login', { username: null, password: null }, '', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
            assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Error in path', function (done) {
        req.query('/logi', { username: '23111998', password: 'venky@123' }, '', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    }) 
});