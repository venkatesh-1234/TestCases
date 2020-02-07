var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for BulletinClear', function () {
    it('BulletinClear', function (done) {
        req.query('/bulletin/clear',null,'ke744oekxfb', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,true)
            assert.equal(output, 200)
            done();
        })
    })
    it('BulletinClear invalid token', function (done) {
        req.query('/bulletin/clear',null,'ke744oekxf', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrect path', function (done) {
        req.query('/bulletin/clea',null,'ke744oekxfb', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
})