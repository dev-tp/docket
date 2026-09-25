import { db } from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		projects: await db.query.project.findMany()
	};
}
