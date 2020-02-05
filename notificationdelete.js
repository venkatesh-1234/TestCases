var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for notification delete', function () {
        it('notification deleted', function (done) {
                req.query('/notification/delete', 'mes_no= 2652', '4svmqae53v4', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, true)
                        assert.equal(data.history.affectedRows, 1)
                        assert.equal(output, 200)
                        done();
                })
        })
        it('There is no notification with this number', function (done) {
                req.query('/notification/delete', 'mes_no= 2652', '4svmqae53v4', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, true)
                        assert.equal(data.history.affectedRows, 0)
                        assert.equal(output, 200)
                        done();
                })
        })
        it('Incorrect path', function (done) {
                req.query('/notification/delet', 'mes_no=2644', '3egpr8k69gt', function (err, res, body) {
                        var output = res.statusCode;
                        assert.equal(output, 404)
                        done();
                })
        });

        it('Query with mes_no as null and with token', function (done) {
                req.query('/notification/delete', 'null', '4svmqae53v4', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, false)
                        assert.equal(output, 400)
                        done();
                })
        })
        it('Query with mes_no with invalid token', function (done) {
                req.query('/notification/delete', 'mes_no=2646', 'apcces6uc', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, false)
                        assert.equal(output, 401)
                        done();
                })
        })
        it('Query with mes_no as null and  with invalid token', function (done) {
                req.query('/notification/delete', 'null', 'null', function (err, res, body) {
                        var output = res.statusCode;
                        var data = JSON.parse(res.body);
                        console.log(data)
                        assert.equal(data.success, false)
                        assert.equal(output, 401)
                        done();
                })
        })

});