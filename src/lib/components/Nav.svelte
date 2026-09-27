<script>
	import Icon from './Icon.svelte';
	import SearchBar from './SearchBar.svelte';

	/** @type {{ icon: import('$lib/components/Icon.svelte').Icon, isDocked: boolean, label: string, route: string }[]} */
	const links = [
		{ icon: 'ClipboardCheck', isDocked: true, label: 'Tasks', route: '/tasks' },
		{ icon: 'Newspaper', isDocked: true, label: 'Feed', route: '/feed' },
		{ icon: 'Folder', isDocked: true, label: 'Projects', route: '/projects' },
		{ icon: 'FileStack', isDocked: true, label: 'Documents', route: '/documents' },
		{ icon: 'Mailbox', isDocked: false, label: 'Mailroom', route: '/mailroom' },
		{ icon: 'Contact', isDocked: false, label: 'Contacts', route: '/contacts' },
		{ icon: 'ChartNoAxesColumn', isDocked: false, label: 'Timesheet', route: '/timesheet' },
		{ icon: 'Calendar', isDocked: false, label: 'Calendar', route: '/calendar' },
		{ icon: 'Search', isDocked: false, label: 'Search', route: '/search' },
		{ icon: 'Plus', isDocked: false, label: 'New Project', route: '/projects/new' },
		{ icon: 'ClipboardCheck', isDocked: false, label: 'Saved Reports', route: '/saved-reports' },
		{ icon: 'ClipboardList', isDocked: false, label: 'Report Builder', route: '/report-builder' },
		{ icon: 'Wrench', isDocked: false, label: 'Setup', route: '/setup' },
		{ icon: 'SlidersHorizontal', isDocked: false, label: 'Advanced', route: '/advanced-settings' }
	];

	/** @type {boolean} */
	let open = $state(false);
</script>

<nav class="flex min-h-16 w-full items-center border-b bg-sky-900 px-4 text-white">
	<div class="flex gap-4">
		<button onclick={() => (open = true)}><Icon class="h-5 w-5" name="Menu" /></button>
		{#each links as link}
			{#if link.isDocked}
				<a class="flex items-center gap-2" href={link.route}>
					<Icon name={link.icon} />
					{link.label}
				</a>
			{/if}
		{/each}
	</div>
	<div class="grow"></div>
	<div class="flex gap-4">
		<SearchBar placeholder="Search for a project" />
		<button><Icon class="h-6 w-6" name="Timer" /></button>
		<button><Icon class="h-6 w-6" name="CircleQuestionMark" /></button>
		<button><Icon class="h-6 w-6" name="CircleUserRound" /></button>
	</div>
</nav>

{#if open}
	<div class="fixed top-0 bottom-0 z-20 flex min-w-75 flex-col bg-sky-900 text-white">
		<div class="flex min-h-16 items-center px-4">
			<button onclick={() => (open = false)}>
				<Icon class="h-6 w-6" name="X" />
			</button>
		</div>
		<ul class="overflow-auto">
			{#each links as link}
				{#if !link.isDocked}
					<a
						class="flex w-full items-center gap-2 p-4"
						href={link.route}
						onclick={() => (open = false)}
					>
						<Icon class="h-6 w-6" name={link.icon} />
						{link.label}
					</a>
				{/if}
			{/each}
		</ul>
		<div class="grow"></div>
		<div class="flex items-center justify-end p-4 text-sm">
			<button>Configure</button>
		</div>
	</div>
	<button
		class="fixed inset-0 z-10 cursor-default! bg-black/50 backdrop-blur-xs"
		onclick={() => (open = false)}
		title="Close menu"
	></button>
{/if}
