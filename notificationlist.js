var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for notification list', function () {
    it('notification list', function (done) {
        req.query('/notification/list', null, 'ke744oekxfb', function (err, res, body) {
            var output = res.statusCode;
            var data = JSON.parse(res.body);
            console.log(data)
            assert.equal(data.success, true)
            assert.equal(data.history[0].type,'notification')
            assert.equal(output, 200)
            done();
        })
    })
    it('notification list with invalid token', function (done) {
        req.query('/notification/list', '', 'rtpq20xndj', function (err, res, body) {
          var output = res.statusCode;
          var data = JSON.parse(res.body);
          console.log(data)
          assert.equal(data.success, false)
          assert.equal(output, 401)
          done();
        })
      })
      it('notification list with null as token', function (done) {
        req.query('/notification/list', null, '', function (err, res, body) {
          var output = res.statusCode;
          var data = JSON.parse(res.body);
          console.log(data)
          assert.equal(data.success, false)
          assert.equal(output, 401)
          done();
        })
      }) 
      it('notification list Error in path', function (done) {
        req.query('/notification/lis', null, 'fgefgrf', function (err, res, body) {
          var output = res.statusCode;
          assert.equal(output, 404)
          done();
        })
      })    
});