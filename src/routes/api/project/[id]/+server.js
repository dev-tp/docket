import { eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';

/** @type {import('./$types').RequestHandler} */
export async function PUT(event) {
	// TODO Validate JSON body to make sure it contains project columns and values
	const json = await event.request.json();

	await db
		.update(project)
		.set(json)
		.where(eq(project.id, parseInt(event.params.id)));

	return new Response();
}
