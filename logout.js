var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for logout', function () {
	it('body with regid and token', function (done) {
		req.query('/logout', { regid: 'localWebui' }, '3rha6ctmfen', function (err, res, body) {
			var output = res.statusCode;
			var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,true)
			assert.equal(output, 200)
			done();
		})
	})
	it('Incorrect path', function (done) {
		req.query('/logou', { regid: '' }, '8g4xdmafui3', function (err, res, body) {
			var output = res.statusCode;
			assert.equal(output, 404)
			done();
		})
	});
	it('body as null with no token', function (done) {
		req.query('/logout', null, '', function (err, res, body) {
			var output = res.statusCode;
			var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
			assert.equal(output, 401)
			done();
		})
	})
	it('body as null with  token', function (done) {
		req.query('/logout', null, '1ttcjzia8mo', function (err, res, body) {
			var output = res.statusCode;
			var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
			assert.equal(output, 401)
			done();
		})
	})
	it('body as null with invalid token', function (done) {
		req.query('/logout', null, 'snbpm', function (err, res, body) {
			var output = res.statusCode;
			var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
			assert.equal(output, 401)
			done();
		})
	})
	it('body with invalid regid with token', function (done) {
		req.query('/logout', { regid: 'localWebuh' }, '1ttcjzia8mo', function (err, res, body) {
			var output = res.statusCode;
			var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,false)
			assert.equal(output, 401)
			done();
		})
	})
});