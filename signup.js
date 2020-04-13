var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
var accManager = require('../dbForTest/accountManager');
var nconf = require('nconf');
require('../TestConfigs/configTestEnviron');
var URL = nconf.get('httpUrl');
var CP = require('../../database/sql/sqlQuery');
var testInput = nconf.get('signUp')
describe('success case for get all GetAllClients', function() {
    before(function(done) {
       this.timeout(3000);
       //deleting from users
       CP.queryFunction('delete from users where EmailID=?', ['venkatesh.chandu@securifi.com'], function() {
                       done();
                       });
       });  

   it('1.checking the success case and through "emailValidateAccountLink" function', function(done) {
      this.timeout(10000);
       request.post('/account/add', {
            "emailID": 'venkatesh.chandu@securifi.com',
               "password": 'securifi123'
       },null, function(err, res, body) {
           var output = JSON.parse(body)
           console.log('output--------->',body)
             assert.equal(res.statusCode,200)
           assert.equal(output.success, 'true');
          // assert.equal(typeof(output.Result['25512345']), 'object');
           done();
       })
   })
    it('2.email Already taken', function(done) {
       request.post('/account/add', {
            'emailID': 'venkatesh.chandu@securifi.com',
               'password': "securifi123"
       },null, function(err, res, body) {
           var output = JSON.parse(body)
           console.log('output--------->',body)
           assert.equal(output.success, false);
           assert.equal(output.reason,"Email Taken")
           assert.equal(res.statusCode,502)
           done();
       })
   })
     it('3.going through validate function', function(done) {
       request.post('/account/add', {
            'emailID': 'venkatesh.chandu@securifi.com'
       },null, function(err, res, body) {
          // var output = JSON.parse(body)
           console.log('output--------->',body)
         //  assert.equal(output.success, false);
           assert.equal(res.statusCode,502)
           done();
       })
   })
});

/*
describe('testcases for signup', function () {
    console.log("testinput--->",testInput)
     beforeEach(function (done) {
        this.timeout(5000);
        console.log("testinput--->",testInput)
        accManager.httpDeleteAccount(testInput, function (err, rows) {
            console.log('done',rows);
            done();
        });
    });
   
 it('signup with valid details', function (done) {
        this.timeout(8000);
            request.post('/SignUp', {
                'emailID': 'venkatesh.chandu@securifi.com',
                'password': "securifi"
            }, null, function (err, res, body) {
            var output = JSON.parse(body)
            console.log("output--->",res.body)
            assert.equal(res.statusCode, 200)
            assert.equal(output.success, 'true');
            done();
        })
    })
   / it('email is already exits', function (done) {
        this.timeout(8000);
        request.post('/SignUp', {
            'emailID': 'venkatesh.chandu@securifi.com',
            'password': "securifi"
        }, null, function (err, res, body) {
           var output = JSON.parse(body)
            assert.equal(res.statusCode, 502)
            assert.equal(output.success, false);
            done();
        })
    })
    it(' request is empty', function (done) {
        this.timeout(8000);
        request.post('/SignUp', {
        
        }, null, function (err, res, body) {
            assert.equal(body,'')
            done();
        })
    })
    it('signup with invalid details', function (done) {
        this.timeout(8000);
        request.post('/SignUp', {
            'emailID': 'venkatesh.chandu@securifi.com',
        }, null, function (err, res, body) {
        //  console.log("body-->",res)
            assert.equal(res.statusCode, 401)
            done();
        })
    })
    it(' database is not connected', function (done) {
        this.timeout(8000);
        request.post('/SignUp', {
            'emailID': 'venkatesh.chandu@securifi.com',
            'password': "securifi"
        }, null, function (err, res, body) {
            var output = JSON.parse(body)
            assert.equal(res.statusCode, 520)
            assert.equal(output.success, 'false');
            done();
        })
    });*/
