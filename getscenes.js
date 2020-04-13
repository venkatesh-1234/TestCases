
var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
var userid;
var token;
var tempvar;
var accManager = require('../dbForTest/accountManager');
describe('Testcases for GetAllScenes: ', function () {
 beforeEach(function (done) {
   this.timeout(8000);
   request.post('/Login', {
               "emailID": 'venkatesh.chandu@securifi.com',
               "password": 'securifi123'
       },null, function(err, res, body) {
           var output = JSON.parse(body)
           userid=output.userID
           temppass=output.tempPass
           tempvar='Bearer '+temppass+':'+userid
               done()     
          });
        })
        after(function(done) {
            this.timeout(6000)
            CP.queryFunction("delete from AlmondUsers where AlmondMAC = ?", [2551234567], function() {
                CP.queryFunction('delete from allalmondplus where AlmondMAC=?', [2551234567], function() {
                 CP.queryFunction('delete from scene where AlmondMAC=?',[2551234567],function(){
                        done();
                })
            })
        })
        })
        it('scences with ouath error', function(done) {
            request.post('/scenes', {
            }, 'we', function(err, res, body) {
                assert.equal(res.statusCode, 502);
                done();
            })
        }) 

        it('scences with empty users', function(done) {
            request.post('/scenes', {
                "AlmondMAC":"2551234567"
            }, tempvar, function(err, res, body) {
                var output= JSON.parse(body)
                assert.equal(res.statusCode, 556);
                assert.equal(output.success,false)
                assert.equal(output.reason,'Access Denied')
                console.log("body---->",body)
                done();
            })
        })
    
    it('Geting all scenes with valid details but empty ', function (done) {
        this.timeout(8000);
        console.log("userid--->",userid)
        CP.queryFunction('insert into allalmondplus (AlmondMAC,AlmondID,AlmondName,CloudID) values (?,?,?,?);', [2551234567, 'test1', 'testalmond', 'one'], function() {
            CP.queryFunction("insert into AlmondUsers (AlmondName,AlmondMAC,FirmwareVersion,userID,LongSecret) values (?,?,?,?,?)", ['testalmond', 2551234567, 'al3', userid, 'test'], function() {
        request.post('/scenes',{"AlmondMAC":"2551234567"},tempvar, function (err, res, body) {
           var output = JSON.parse(body)
           assert.equal(res.statusCode,200)
           console.log("output--->",output)
           assert.equal(body,'{}')
            done();
        })
    })
    })
})
it('Geting all scenes with valid details', function (done) {
    this.timeout(8000);
    console.log("userid--->",userid)
    CP.queryFunction('insert into allalmondplus (AlmondMAC,AlmondID,AlmondName,CloudID) values (?,?,?,?);', [2551234567, 'test1', 'testalmond', 'one'], function() {
        CP.queryFunction("insert into AlmondUsers (AlmondName,AlmondMAC,FirmwareVersion,userID,LongSecret) values (?,?,?,?,?)", ['testalmond', 2551234567, 'al3', userid, 'test'], function() {
      CP.queryFunction('insert into scene(AlmondMAC,SceneID,SceneName)values(?,?,?);',[2551234567,2,'test1'],function(){
       request.post('/scenes',{"AlmondMAC":"2551234567"},tempvar, function (err, res, body) {
       var output = JSON.parse(body)
       assert.equal(res.statusCode,200)
       assert.equal(output.CommandType,'scenes')
       assert.equal(output.Success,true)
       assert.equal(output.AlmondMAC,2551234567)
       assert.equal(output.Scenes[2].SceneEntryList,null)
       assert.equal(output.Scenes[2].ID,2)
       assert.equal(output.Scenes[2].Name,'test1')
       console.log("output--->",output)
       //assert.equal(body,'{}')
        done();
    })
})
})
    })
})
})
