import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema.js';

/** @param {Record<string, string | undefined>} env */
export function getDbInstance(env) {
	const { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } = env;

	if (!POSTGRES_DB || !POSTGRES_HOST || !POSTGRES_PASSWORD || !POSTGRES_USER) {
		throw new Error('Postgres environment variables are not set');
	}

	const url = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;

	return drizzle(postgres(url), { schema });
}
