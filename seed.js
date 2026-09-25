import * as schema from './src/lib/server/db/schema.js';
import { getDbInstance } from './src/lib/server/db/utils.js';

const db = getDbInstance(process.env);

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
