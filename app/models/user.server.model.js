const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
	firstName: String,
	lastName: String,
	email: String,
	userName: String,
	Password: String
})

mongoose.model('User', UserSchema);