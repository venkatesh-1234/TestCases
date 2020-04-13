var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
var token
var emailID
describe('testcases for login', function () {
    CP.queryFunction('SELECT ValidationToken from ?? where EmailID=?', ['Users','venkatesh.chandu@securifi.com'], function (err, rows) {
        assert.equal(rows.length,1)
        token =rows[0].ValidationToken
        console.log("validatetoken-->",token)
        if (err || rows.length == 0) {
            callback(err);
            
        }

    })
        CP.queryFunction('SELECT EmailID  from ?? where EmailID=?', ['Users','venkatesh.chandu@securifi.com'], function (err, rows) {
            
             emailID  = rows[0].EmailID
       
});
  it(' verify account with valid details', function (done) {
        this.timeout(5000);
        request.post('/VerifyAccount', {
            'emailID': emailID,
            'token':  token,
            'password':'securifi'
        }, null, function (err, res, body) {
           // var output = JSON.parse(body)
            console.log('body---->',body)
            assert.equal(res.statuscode,200)
           assert.equal(body.success,true)
            done();
        })
    })
    it('verify account  with If request is empty', function (done) {
        this.timeout(8000);
        request.post('/VerifyAccount', {
          
        }, null, function (err, res, body) {
            assert.equal(body,'');
            done();
        })
    })
    it('verify account  if validity fails', function (done) {
        this.timeout(8000);
        request.post('/VerifyAccount', {
            'emailID': '',
            'password': "",
        }, null, function (err, res, body) {
            console.log("body----->",body)
            assert.equal(res.statusCode,401)
            done();
        })
    })
  
    })
