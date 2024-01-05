const Database = require("./database.js");

function TesterDB(path, config) {
	return new Database(path, config);
}

TesterDB.Database = Database;
TesterDB.TesterDBError = require("./error.js");

module.exports = Database;