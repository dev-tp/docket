<script module>
	/**
	 * @import { Project } from '$lib/server/db/schema'
	 *
	 * @typedef {Object} Props
	 * @property {Project[]} projects
	 */
</script>

<script>
	import Icon from './Icon.svelte';

	/** @type {Props} */
	const { projects } = $props();
</script>

<table class="w-full bg-inherit text-sm">
	<thead class="sticky top-0 bg-inherit">
		<tr class="border-b border-gray-300 *:pb-2 *:text-start *:font-normal">
			<th>Project Name</th>
			<th>Project Type</th>
			<th>Phase</th>
			<th>Tags</th>
			<th>Primary</th>
			<th>Last Activity</th>
			<th>Created Date</th>
		</tr>
	</thead>
	<tbody>
		{#each projects as project}
			<tr class="border-b border-gray-300 *:py-2 last:border-none hover:bg-gray-100">
				<td>
					<a class="text-sky-600 hover:underline" href="/project/{project.id}">{project.name}</a>
				</td>
				<td class="font-bold">{project.type}</td>
				<td class="font-bold">{project.phaseId}</td>
				<td>
					<span class="rounded-full bg-gray-500 px-1 text-xs text-white">{project.tags}</span>
				</td>
				<td class="font-bold">{project.primary}</td>
				<td>{project.lastActivity}</td>
				<td>{project.dateCreated}</td>
			</tr>
		{/each}
	</tbody>
	<tfoot class="sticky bottom-0 w-full bg-inherit">
		<tr class="*:pt-2">
			<td colspan="7">
				<div class="flex w-full px-4">
					<span>1 to 25 of 30</span>
					<div class="grow"></div>
					<label>
						Show
						<select class="border px-2 py-0.5">
							<option value="100">100</option>
						</select>
					</label>
					<div class="w-4"></div>
					<div class="flex items-center gap-2">
						<button><Icon name="ChevronFirst" /></button>
						<button><Icon name="ChevronLeft" /></button>
						<span>Page 1 of 2</span>
						<button><Icon name="ChevronLast" /></button>
						<button><Icon name="ChevronRight" /></button>
					</div>
				</div>
			</td>
		</tr>
	</tfoot>
</table>
