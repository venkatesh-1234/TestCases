var request = require("../../client.js")
var CP = require('../../Database/sql/sqlQuery.js');
var assert = require('assert');
describe('testcases for signup', function () {
    it('login for temppass',function(done){
        this.timeout(8000);
        request.post('/Login', {
            'emailID': 'venkatesh.chandu@securifi.com',
            'password': "securifi"
        },null, function (err, res, body) {
            var output = JSON.parse(body)
            userid = output.userID
            tempPass = output.tempPass;
            done()
    })
    })


    it('logout with valid details', function (done) {
        this.timeout(8000);
        console.log("temppass-->",tempPass)
        console.log("userid-->",userid)
            request.post('/Logout', {
                'userID': userid,
                'tempPass': tempPass
            }, 'Bearer', function (err, res, body) {
                var output = JSON.parse(body)
                console.log("body----->",output)
                done();
            })
        })
        it('logout with invalid details', function (done) {
                 this.timeout(8000);
                 request.post('/Logout', {
                     'userID': userid,
                     'tempPass': tempPass
                 }, null, function (err, res, body) {
                     var output = JSON.parse(body)
                     assert.equal(res.statuscode,502)
                     done();
                 })
             })
    it('If request is empty', function (done) {
        this.timeout(8000);
        request.post('/Logout', {

        }, null, function (err, res, body) {
            assert.equal(body, '');
            done();
        })
    })


})
