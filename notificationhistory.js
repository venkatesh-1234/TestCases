var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for notification history', function () {
  it('query mes_no with token', function (done) {
    req.query('/notification/history', 'group=test', 'rtpq20xndjc', function (err, res, body) {
      var output = res.statusCode;
      var data = JSON.parse(res.body);
      console.log(data)
      assert.equal(data.success, true)
      assert.equal(output, 200)
      done();
    })
  })
  it('query with token as null', function (done) {
    req.query('/notification/history', 'group=test', null, function (err, res, body) {
      var output = res.statusCode;
      var data = JSON.parse(res.body);
			console.log(data)
      assert.equal(data.success,false)
      assert.equal(output, 401)
      done();
    })
  })
  it('Incorect path', function (done) {
    req.query('/notification/histor', 'jyb3zruzkai','group=test',function (err, res, body) {
      var output = res.statusCode;
      assert.equal(output, 404)
      done();
    })
  })
  it('query with group as null', function (done) {
    req.query('/notification/history', null,'ysdwdetdyfwefdfde', function (err, res, body) {
      var output = res.statusCode;
      var data = JSON.parse(res.body);
			console.log(data)
      assert.equal(data.success,false)
      assert.equal(output, 401)
      done();
    })
  })
  it('query with group as null and token as empty', function (done) {
    req.query('/notification/history', null,'', function (err, res, body) {
      var output = res.statusCode;
      var data = JSON.parse(res.body);
			console.log(data)
      assert.equal(data.success,false)
      assert.equal(output, 401)
      done();
    })
  })
});