var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for revenue day', function () {
    it('revenue day', function (done) {
        this.timeout(4500);
        req.query('/revenue/day',{ date: '2020/02/03', month: '202002', group: 'testGroup|testSubGroup' },'ke744oekxfb', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,true)
            assert.equal(output, 200)
            done();
        })
    })
    it('Database error', function (done) {
        this.timeout(4500);
        req.query('/revenue/day',{ date: '2020/02/45', month: '202002', group: '點點微風信義店'},'ke744oekxfb', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(err)
	    assert.equal(data.success,false)
            assert.equal(output, 503)
            done();
        })
    })
    it('Invalid details', function (done) {
        req.query('/revenue/day',{dat:'01-26-2020'},'ke744oekxfb', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
            assert.equal(data.success,false)
            assert.equal(output, 400)
            done();
        })
    })
    it('Invalid token', function (done) {
        req.query('/revenue/day',{date:'01-26-2020'},'tqm1fq42i', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrect path', function (done) {
        req.query('/revenue/da',{date:'01-26-2020'},'tqm1fq42i2', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output,404)
            done();
        })
    })
})
