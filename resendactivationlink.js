var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
describe('testcases for resetpassword', function () {
  it('resendactivation link valid details', function (done) {
        this.timeout(8000);
        request.post('/ResendActivationLink', {
            'emailID': 'venkatesh.chandu@securifi.com'
        }, null, function (err, res, body) {
            var output = JSON.parse(body)
            console.log("output--->",res)
            assert.equal(res.statuscode,200)
            assert.equal(body.success,true)
            done();
        })
    })
    it('If email is already validated', function (done) {
        this.timeout(8000);
        request.post('/ResendActivationLink', {
            'emailID': 'venkatesh.chandu@securifi.com'
        }, null, function (err, res, body) {
            var output = JSON.parse(body)
            assert.equal(output.reason,'Already Validated')
            assert.equal(output.success,false)
            done();
        })
    })
    it('If request is empty', function (done) {
        this.timeout(8000);
        request.post('/ResendActivationLink', {
        
        }, null, function (err, res, body) {
            assert.equal(body,'')
            done();
        })
    })
})