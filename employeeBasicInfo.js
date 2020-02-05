var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for employeebasicinfo', function () {
    it('employeebasicinfo', function (done) {
        req.query('/employeeBasicInfo',{employeeID:'151111'}, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, true)
            assert.equal(output, 200)
            done();
        })
    })
    it('employeebasicinfo', function (done) {
        req.query('/employeeBasicInfo',{employeeID:'dnged'}, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 200)
            done();
        })
    })
    it('employeebasicinfo with invalid details', function (done) {
        req.query('/employeeBasicInfo',{employee:'151'}, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 400)
            done();
        })
    })
    it('employeebasicinfo with invalid token', function (done) {
        req.query('/employeeBasicInfo',{employeeID:'151111'}, 'tqm1fq42i', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrect path', function (done) {
        req.query('/employeeBasic',{employeeID:'151111'}, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output,404)
            done();
        })
    })
});