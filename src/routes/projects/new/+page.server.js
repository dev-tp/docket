import { fail, redirect } from '@sveltejs/kit';

import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const result = await db
			.insert(project)
			.values({
				name: formData.get('name')?.toString() || '',
				client: formData.get('client')?.toString() || '',
				team: formData.get('team')?.toString() || '',
				type: formData.get('type')?.toString() || '',
				tags: '',
				primary: ''
			})
			.returning();

		if (result.length > 0) {
			redirect(302, '/projects');
		}

		fail(400, 'Transaction failed');
	}
};
