const User = require('mongoose').model('User');

exports.create = function (req, res, next) {
	const user = new User (req.body);
	user.save((err) => {
		if(err){
			next(err);
		} else {
			res.status(200).json(user);
		}
	})
};

exports.find = function (req, res, next) {
	User.find({}, (err, users) => {
		if (err) {
			next(err);
		} else {
			res.status(200).json(users);
		}
	});
};