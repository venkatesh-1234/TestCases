var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
describe('testcases for login', function () {
    it ('cheking if email is exits or not',function(){
    CP.queryFunction('SELECT ValidationToken from ?? where EmailID=?', ['Users','venkatesh.chandu@securifi.com'], function (err, rows) {
        assert.equal(rows.length,1)
        if (err || rows.length == 0) {
            callback(err);
            
            
        }
    })
    })
   it('login with valid details', function (done) {
        this.timeout(8000);
        request.post('/Login', {
            'emailID': 'venkatesh.chandu@securifi.com',
            'password': 'securifi123'
        }, null, function (err, res, body) {
            var output = JSON.parse(body)
            console.log("body----->",body)
            assert.equal(res.statusCode, 200)
            assert.equal(output.success,true);
            assert.equal(output.commandType,'Login')
            assert.equal(output.userID,'11111111235705')
            assert.equal(output.isActivated,'0')
            userid = output.userID;
            tempPass = output.tempPass;
             console.log("userid---->",userid)
            done();
        })
    })
  /*  it('If request is empty', function (done) {
        this.timeout(8000);
        request.post('/Login', {
          
        }, null, function (err, res, body) {
            assert.equal(body,'');
            done();
        })
    })
    it('login with invalid details', function (done) {
        this.timeout(8000);
        request.post('/Login', {
            'emailID': 'venkatesh.chandu@securifi',
            'password': "securifi",
        }, null, function (err, res, body) {
            console.log("body----->",body)
            assert.equal(res.statusCode,502)
            done();
        })
    })
    it('login with userid and temppass', function (done) {
        this.timeout(500000)
        console.log("userid---->",userid)
        request.post('/Login', {
            'userID':userid ,
            'tempPass': tempPass
        }, null, function (err, res, body) {
           // var data = JSON.parse(body)
            assert.equal(res.statusCode,200)
            done();
        })
    })*/
    })
