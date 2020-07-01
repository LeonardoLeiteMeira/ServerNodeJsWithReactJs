const HellorWordService = require("../services/HelloWordService");

module.exports = {
	async getHelloWord(request, response, next) {
		try {
			const result = HellorWordService.getHelloWordObject();
			return response.json(result);
		} catch (error) {
			next(error);
		}
	},
};
