const knex = require("../../repository/database");

module.exports = {
	getHelloWordObject() {
		const helloWord = {
			Template: "Desenvolvido por Commit Jr - Sua Empresa Digital",
			HelloWord: "Hello Word",
			App: "NodeJs App",
		};

		return helloWord;
	},
};
