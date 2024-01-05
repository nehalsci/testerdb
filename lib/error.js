const constants = {
	"test": function() {
		return "This is a test error";
	}
}

class TesterDBError extends Error {
	constructor(...args) {
		const cst = constants[args[0]];

		if (cst) {
			super(cst(...args));
		} else {
			super(...args);
		}
	}
}

TesterDBError.constants = constants;
module.exports = TesterDBError;