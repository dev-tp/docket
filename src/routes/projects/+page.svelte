<script>
	import Icon from '$lib/components/Icon.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	const { data } = $props();
</script>

<div class="flex h-full flex-col">
	<div class="flex pb-2">
		<h1 class="text-xl">Projects</h1>
		<div class="grow"></div>
		<div class="flex items-center gap-4">
			<button
				class="flex items-center gap-1 rounded-sm bg-blue-500 px-2 py-0.5 text-xs text-white hover:bg-blue-600"
			>
				<Icon class="h-3 w-3" name="MessagesSquare" />
				Give feedback
			</button>
			<SearchBar placeholder="Search projects" />
			<a
				class="flex items-center gap-1 rounded-sm bg-teal-500 py-1 pr-4 pl-2 text-white hover:bg-teal-600"
				href="/projects/new"
			>
				<Icon name="Plus" />
				Project
			</a>
		</div>
	</div>
	<ul class="flex gap-4 py-2 text-sm">
		<li>{@render column('Last Activity', 'desc')}</li>
		<li>{@render column('My Projects')}</li>
		<li>{@render column('Project Type')}</li>
		<li>{@render column('Phase')}</li>
		<li>{@render column('Primary')}</li>
		<li>{@render column('Tags')}</li>
		<li><label><input type="checkbox" /> Show archived</label></li>
		<li><label><input type="checkbox" /> Pinned only</label></li>
		<li class="font-bold">{data.projects.length} project(s)</li>
	</ul>
	<ul class="flex items-center gap-2 py-2">
		<li>{@render filter('Countrywide Trial Lawyers, APLC')}</li>
		<li>{@render filter('Personal Injury')}</li>
		<li><button class="text-xs text-teal-700">Clear filters</button></li>
	</ul>
	<div class="mt-4 grow overflow-auto bg-white">
		<Projects projects={data.projects} />
	</div>
</div>

{#snippet column(
	/** @type {string} */
	label,
	/** @type {'asc' | 'desc' | undefined} */
	sort = undefined
)}
	<button class="flex items-center gap-2">
		{#if sort === 'asc'}
			<Icon name="ArrowUp" />
		{:else if sort === 'desc'}
			<Icon name="ArrowDown" />
		{/if}
		{label}
		<Icon name="ChevronDown" />
	</button>
{/snippet}

{#snippet filter(
	/** @type {string} */
	label
)}
	<div class="flex gap-1 rounded-sm border p-1 text-xs text-gray-500">
		{label}
		<button><Icon name="CircleX" /></button>
	</div>
{/snippet}
