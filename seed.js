import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './src/lib/server/db/schema.js';

const { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } = process.env;

if (!POSTGRES_DB || !POSTGRES_HOST || !POSTGRES_PASSWORD || !POSTGRES_USER) {
	throw new Error('Postgres environment variables are not set');
}

const url = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;

const db = drizzle(postgres(url), { schema });

await db
	.insert(schema.projectPhase)
	.values([
		{ name: 'Intake' },
		{ name: 'Investigation' },
		{ name: 'Treating' },
		{ name: 'Done Treating' },
		{ name: 'Records Received' },
		{ name: 'Demand Out' },
		{ name: 'Negotiations' },
		{ name: 'Settled (Pre-Lit)' },
		{ name: 'Lit-Filing/Pro-Discovery' },
		{ name: 'Lit-Discovery' },
		{ name: 'Lit-Pre-Trial' },
		{ name: 'Small Claims - Lit' },
		{ name: 'Settled (Lit)' },
		{ name: 'Lien Negotiations' },
		{ name: 'Prior Atty Liens' },
		{ name: 'Disbursement - Accounting' },
		{ name: 'Trust Hold - Post Disbursement' },
		{ name: 'Judgment' },
		{ name: 'To Refer Out' },
		{ name: 'Referred Out' },
		{ name: 'Subbed Out' },
		{ name: 'IAL Atty Liens' },
		{ name: 'Closed (Dropped)' },
		{ name: 'Closed (Settled)' },
		{ name: 'Closed (Referral Fee Received)' },
		{ name: 'Closed (Judgment)' },
		{ name: 'Closed (Lien Received)' },
		{ name: 'Archived' }
	]);

db.$client.end();
