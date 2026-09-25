import { eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const id = parseInt(event.params.id);

	return {
		project: await db.query.project.findFirst({ where: eq(project.id, id) })
	};
}
