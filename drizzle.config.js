import { defineConfig } from 'drizzle-kit';

const { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } = process.env;

if (!POSTGRES_DB || !POSTGRES_HOST || !POSTGRES_PASSWORD || !POSTGRES_USER) {
	throw new Error('Postgres environment variables are not set');
}

const url = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;

export default defineConfig({
	schema: './src/lib/server/db/schema.js',
	dialect: 'postgresql',
	dbCredentials: { url },
	verbose: true,
	strict: true
});
