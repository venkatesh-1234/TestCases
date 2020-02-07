var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for bulletinlist', function () {
    it('bulletinlist', function (done) {
        req.query('/bulletin/list', {group:'點點微風信義店' ,startEpoch: '1575138600000',  endEpoch: '1583001000000'
    }, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, true)
            assert.equal(output, 200)
            done();
        })
    })
    it('bulletinlist is empty', function (done) {
        req.query('/bulletin/list', {group:'點點微風信義店' ,startEpoch: '1575138600000',  endEpoch: '1583001000000'
    }, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 200)
            done();
        })
    })
    it('invalid details', function (done) {
        req.query('/bulletin/list', null, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 400)
            done();
        })
    })
    it('bulletinlist', function (done) {
        req.query('/bulletin/list', {group:'點點微風信義店' ,startEpoch: '1575138600000',  endEpoch: '1583001000000'
    }, 'tqm1fq42i', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrect path', function (done) {
        req.query('/bulletin/lis', {group:'點點微風信義店' ,startEpoch: '1575138600000',  endEpoch: '1583001000000'
    }, 'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
});