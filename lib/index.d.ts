declare function TesterDB(name: string, config: TesterDB.IConfig): TesterDB.Database;

declare namespace TesterDB {
	// Interfaces
	export interface IConfig {};

	// Classes & Function
	export class Database {
		// Properties
		public path: string;
		public config: IConfig;

		// Methods
		public constructor(name: string, config?: IConfig);
		public createCollection(name: string): number;
	}

	export class TesterDBError extends Error {
		public constructor(...args: any[]);
	};

	export namespace TesterDBError {
		export const constants: {
			"test": () => string;
		}
	}
}

export = TesterDB;