import { Database, YourDatabaseConnector } from 'https://deno.land/x/denodb/mod.ts';

// SQLite3Connector, MySQLConnector, PostgresConnector...
const connector = new YourDatabaseConnector({ ... });
const db = new Database(connector);

export default db;