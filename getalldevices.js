
var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
var userid;
var token;
var tempvar;
var accManager = require('../dbForTest/accountManager');
describe('Testcases for GetAlldecices: ', function () {
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
                        done();
                })
            })
    
        })
        it('devices with ouath error', function(done) {
            request.get('/devices/getAll', {
            }, 'we', function(err, res, body) {
                assert.equal(res.statusCode, 502);
                done();
            })
        }) 
        it('devices with empty users', function(done) {
            request.get('/devices/getAll', {
                'userID':userid
            }, tempvar, function(err, res, body) {
                assert.equal(res.statusCode, 200);
                assert.equal(body,'{}')
                console.log("body---->",body)
                done();
            })
        })
    
    it('Geting all devices with valid details', function (done) {
        this.timeout(8000);
        console.log("userid--->",userid)
        CP.queryFunction('insert into allalmondplus (AlmondMAC,AlmondID,AlmondName,CloudID) values (?,?,?,?);', [2551234567, 'test1', 'testalmond', 'one'], function() {
            CP.queryFunction("insert into AlmondUsers (AlmondName,AlmondMAC,FirmwareVersion,userID,LongSecret) values (?,?,?,?,?)", ['testalmond', 2551234567, 'al3', userid, 'test'], function() {
        request.get('/devices/getAll',{'userID':userid},tempvar, function (err, res, body) {
           var output = JSON.parse(body)
           assert.equal(res.statusCode,200)
           assert.equal(output.success,true)
          assert.equal(output.Result['2551234567'].Devices[0].DeviceID,null)
          assert.equal(output.Result['2551234567'].Devices[0].DeviceName,null)
          assert.equal(output.Result['2551234567'].Devices[0].DeviceType,null)
          assert.equal(output.Result['2551234567'].Devices[0].AssociationTimeStamp,null)
          assert.equal(output.Result['2551234567'].Devices[0].ManufacturerName,null)
            console.log("output--->",output.Result['2551234567'].Devices[0].DeviceID)
           assert.equal(typeof(output.Result['2551234567']),'object');
           assert.equal(output.Result['2551234567'].status,null)
           assert.equal(output.Result['2551234567'].name,null)
           assert.equal(output.Result['2551234567'].version,null)

            done();
        })
    })
    })
})
})
