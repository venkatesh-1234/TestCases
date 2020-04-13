
var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
describe('testcases for resetpassword', function () {
  it('reset password valid details', function (done) {
        this.timeout(8000);
        request.post('/ConfirmResetPassword', {
            'emailID': 'venkatesh.chandu@securifi.com',
            'password':'securifi123',
           'token':'Ho9nPLBTCnumTRMsqBngdesEAuWPS5XK' 
        }, null, function (err, res, body) {
            var output = JSON.parse(body)
            console.log("output--->",res.statuscode)
            assert.equal(res.statuscode,200)
            assert.equal(body.success,true)
            done();
        })
    })
    it('reset password validity fails', function (done) {
        this.timeout(8000);
        request.post('/ConfirmResetPassword', {
            'emailID': '',
            'password':'',
           'token':'Ho9nPLBTCnumTRMsqBngdesEAuWPS5XK' 
        }, null, function (err, res, body) {
            console.log("output--->",res.statuscode)
            assert.equal(res.statuscode,401)
            done();
        })
    })
   
    it(' reset password request is null', function (done) {
        this.timeout(8000);
        request.post('/ConfirmResetPassword', {
            
        }, null, function (err, res, body) {
            assert.equal(body,'')
            done();
        })
    })
    
    })
