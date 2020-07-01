require("dotenv/config");

module.exports = {
	connectionDB: {
		client: process.env.CLIENT_DB,
		connection: {
			host: process.env.HOST_DB,
			port: process.env.PORT_DB,
			database: process.env.DATABASE,
			user: process.env.USER_DB,
			password: process.env.PASSWORD_DB,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: `${__dirname}/server/repository/database/migrations`,
		},
		seeds: {
			directory: `${__dirname}/server/repository/database/seeds`,
		},
	},
};
