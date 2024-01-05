const fs = require("node:fs");

class Database {
	constructor(path, config) {
		this.path = typeof path === "string" ? path : "_db";
		this.config = config;

		this.#_create();
	}

	createCollection(name) {
		return 0;
	}

	#_create(path = this.path) {
		const exist = fs.existsSync(path);

		if (!exist) {
			fs.mkdirSync(path);
		} else {
			//...
		}
	}
}

module.exports = Database;