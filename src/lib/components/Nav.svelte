<script>
	import Icon from './Icon.svelte';
	import SearchBar from './SearchBar.svelte';

	let open = $state(false);
</script>

<nav class="flex w-full border-b bg-sky-900 p-4 text-white">
	<ul class="flex items-center gap-4">
		<li class="flex">
			<button onclick={() => (open = true)}><Icon class="h-5 w-5" name="Menu" /></button>
		</li>
		<li><a href="/tasks">Tasks</a></li>
		<li><a href="/feed">Feed</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/documents">Documents</a></li>
	</ul>
	<div class="grow"></div>
	<ul class="flex items-center gap-8">
		<li><SearchBar placeholder="Search for a project" /></li>
		<li><button><Icon class="h-6 w-6" name="Timer" /></button></li>
		<li><button><Icon class="h-6 w-6" name="CircleQuestionMark" /></button></li>
		<li><button><Icon class="h-6 w-6" name="CircleUserRound" /></button></li>
	</ul>
</nav>

{#if open}
	<div class="fixed top-0 bottom-0 z-10 flex min-w-75 flex-col bg-sky-900 text-white">
		<div class="flex items-center p-4">
			<button onclick={() => (open = false)}>
				<Icon class="h-6 w-6" name="X" />
			</button>
		</div>
		<ul class="overflow-auto">
			<li>{@render sidebarButton('Mailbox', 'Mailroom', '/mailroom')}</li>
			<li>{@render sidebarButton('Contact', 'Contacts', '/contacts')}</li>
			<li>{@render sidebarButton('ChartNoAxesColumn', 'Timesheet', '/timesheet')}</li>
			<li>{@render sidebarButton('Calendar', 'Calendar', '/calendar')}</li>
			<li>{@render sidebarButton('Search', 'Search', '/search')}</li>
			<li>{@render sidebarButton('Plus', 'New Project', '/projects/new')}</li>
			<li>{@render sidebarButton('ClipboardCheck', 'Saved Reports', '/saved-reports')}</li>
			<li>{@render sidebarButton('ClipboardList', 'Report Builder', '/report-builder')}</li>
			<li>{@render sidebarButton('Wrench', 'Setup', '/setup')}</li>
			<li>{@render sidebarButton('SlidersHorizontal', 'Advanced', '/advanced-settings')}</li>
		</ul>
		<div class="grow"></div>
		<div class="flex items-center justify-end p-4 text-sm">
			<button>Configure</button>
		</div>
	</div>
{/if}

{#snippet sidebarButton(
	/** @type {import('$lib/components/Icon.svelte').Icon} */
	icon,
	/** @type {string} */
	label,
	/** @type {string} */
	href = '/'
)}
	<a class="flex w-full items-center gap-2 p-4" onclick={() => (open = false)} {href}>
		<Icon class="h-6 w-6" name={icon} />
		{label}
	</a>
{/snippet}
