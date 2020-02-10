var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for profile', function () {
    it('body with required parameters', function (done) {
        req.query('/profile',null,'9s5529mrvdt', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
            assert.equal(data.success,true)
            assert.equal(output, 200)
            done();
        })
    })
    it('body and token as null', function (done) {
        req.query('/profile',null,null, function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
	    assert.equal(data.success,false)
            assert.equal(output,401)
            done();
        })
    })
    it('body as null and ivalid token', function (done) {
        req.query('/profile',null,'rtpq20xnd', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,false)
            assert.equal(output,401)
            done();
        })
    })
    it('Incorrect path', function (done) {
        req.query('/profil',null,'4svmqae53v4', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
})
