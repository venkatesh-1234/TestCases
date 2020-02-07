var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for store', function () {
    it('LastMonthData', function (done) {
        req.query('/storeUpdateInfo', null, 'xltp44txq9', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, true)
            assert.equal(output, 200)
            done();
        })
    })
    it('invalid token', function (done) {
        req.query('/storeUpdateInfo', null, 'xltp44txq', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrect path', function (done) {
        req.query('/storeUpdateInf', null, 'xltp44txq9', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
})