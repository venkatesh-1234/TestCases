var req = require("./reqclient.js")
var assert = require('assert');
describe(' test cases for forgot password', function () {
    it('forgot password', function (done) {
        this.timeout(4500);
        req.query('/forgotPswd',{emailID:'chanduvenkatesh245@gmail.com'},null, function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,true)
            assert.equal(output, 200)
           done();
        })
    })
    it('Email not exits', function (done) {
        req.query('/forgotPswd',{emailID:'ddfrf'},'', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
            assert.equal(output, 200)
            done();
        })
    })
    it('forgot password some fields are missing ', function (done) {
        req.query('/forgotPswd',{email:'venkatesh.chandu@surifi.com'},'', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
            assert.equal(output, 400)
            done();
        })
    })
    it('forgot password Incorrect path', function (done) {
        req.query('/forgotPsw',null,'', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    }) 
});
