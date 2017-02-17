process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('Env: ' + process.env.NODE_ENV);

const configureExpress = require('./config/express');
const configureMongoose = require('./config/mongoose');

const db = configureMongoose();
const app = configureExpress();
app.listen(3000);
module.exports = app;

console.log('Server is running at http://localhost:3000/');