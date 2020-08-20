const generatorController = require('./generatorController');

module.exports = (app) => {
	app.post('/generate',
		generatorController.generate);
};