import { eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';

/** @type {import('./$types').Actions} */
export const actions = {
	updatePhase: async (event) => {
		const formData = await event.request.formData();

		const phaseId = parseInt(formData.get('phase')?.toString() || '0');
		const projectId = parseInt(event.params.id) || 0;

		await db.update(project).set({ phaseId }).where(eq(project.id, projectId));
	}
};
