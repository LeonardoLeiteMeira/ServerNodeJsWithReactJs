const knexfile = require("../../../knexfile");
const knex = require("knex")(knexfile["connectionDB"]);

module.exports = knex;
