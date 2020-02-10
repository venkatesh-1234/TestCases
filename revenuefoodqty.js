var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for revenueFoodQty', function () {
    it('revenueFoodQty', function (done) {
        this.timeout(4500);
        req.query('/revenue/foodqty',{ date: '2020/02/03', month: '202002', group: '點點微風信義店' },'c9xur5mkuaw', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,true)
            assert.equal(output, 200)
            done();
        })
    })
    it('Invalid details', function (done) {
        req.query('/revenue/foodqty',{mon:'01-26-2020'},'c9xur5mkuaw', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,false)
            assert.equal(output, 400)
            done();
        })
    })
    it('invalid token', function (done) {
        req.query('/revenue/foodqty',{date:'01-26-2020'},'tqm1fq42i', function (err, res, body) {
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
