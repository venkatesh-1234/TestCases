var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for groups', function () {
    it('Groups', function (done) {
        req.query('/groups',null,'rtpq20xndjc', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,true)
            assert.equal(output, 200)
            done();
        })
    })
    it('Groups with invalid token', function (done) {
        req.query('/groups',null,'rtpq20xndj', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Groups with null token', function (done) {
        req.query('/groups',null,'', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
	    console.log(data)
	    assert.equal(data.success,false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Groups with Incorrect path', function (done) {
        req.query('/group',null,'', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
});
