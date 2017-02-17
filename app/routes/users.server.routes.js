module.exports = function (app) {
	const users = require('../../app/controllers/users.server.controller');
	app.route('/users')
		.post(users.create)
		.get(users.find);
}