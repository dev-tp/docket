import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '$env/dynamic/private';
import * as schema from './schema';

const { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } = env;

if (!POSTGRES_DB || !POSTGRES_HOST || !POSTGRES_PASSWORD || !POSTGRES_USER) {
	throw new Error('Postgres environment variables are not set');
}

const url = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;

export const db = drizzle(postgres(url), { schema });
