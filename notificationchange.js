var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for NotificationChangeAccess', function () {
    it('NotificationChangeAccess', function (done) {
        req.query('/notification/changeAccess',{employeeID:'23111995',access:'1234'}, 'qpjbt4eexq', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, true)
            assert.equal(output, 200)
            done();
        })
    })
    it('NotificationChangeAccess', function (done) {
        req.query('/notification/changeAccess',{employee:'23111995',access:'1234'}, 'qpjbt4eexq', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 400)
            done();
        })
    })
    it('NotificationChangeAccess', function (done) {
        req.query('/notification/changeAccess',{employee:'23111995',access:'1234'}, 'qpjbt4eex', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, false)
            assert.equal(output, 401)
            done();
        })
    })
    it('Incorrct path', function (done) {
        req.query('/notification/changeAcce',{employee:'23111995',access:'1234'}, 'qpjbt4eexq', function (err, res, body) {
            var output = res.statusCode;
            assert.equal(output, 404)
            done();
        })
    })
    
});