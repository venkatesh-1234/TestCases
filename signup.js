var req = require("./reqclient.js")
var assert = require('assert');
describe('test cases for signup', function () {
	it('signup with valid details', function (done) {
		req.query('/signUP', { emailID: 'venkatesh.chandu@securifi.com', username: '23111998', password: 'venky@123' }, '', function (err, res, body) {
			var output = res.statusCode;
			console.log(output)
			var data = JSON.parse(res.body);
			console.log(data)
			assert.equal(data.success,true)
			assert.equal(output, 200)
			done();
		})
	})
	it('missing some fields', function (done) {
		req.query('/signUP', { username: '23111998', password: 'venky@123' }, '', function (err, res, body) {
			var output = res.statusCode;
			console.log(output)
			var data = JSON.parse(res.body);
			console.log(data)
            assert.equal(data.success,false)
			assert.equal(output, 400)
			done();
		})
	})
	it('email and password as null', function (done) {
		req.query('/signUP', { emailID: null, username: '23111998', password: null }, '', function (err, res, body) {
			var output = res.statusCode;
			console.log(output)
			var data = JSON.parse(res.body);
			console.log(data)
            assert.equal(data.success,false)
			assert.equal(output, 200)
			done();
		})
	})
	it('Incorrect path', function (done) {
		req.query('/signU', { emailID: 'chanduvenkatesh245@gmail.com', username: '23111998', password: 'venky@123' }, '', function (err, res, body) {
			var output = res.statusCode;
			console.log(output)
			assert.equal(output, 404)
			done();
		})
	})
});