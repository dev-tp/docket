<script>
	import Icon from '$lib/components/Icon.svelte';

	/** @type {{ label: string, icon: import('$lib/components/Icon.svelte').Icon}[]} */
	const filters = [
		{ label: 'All', icon: 'Zap' },
		{ label: 'Notes', icon: 'StickyNote' },
		{ label: 'Emails', icon: 'Mail' },
		{ label: 'Faxes', icon: 'Printer' },
		{ label: 'Texts', icon: 'MessagesSquare' },
		{ label: 'Tasks', icon: 'CircleCheck' },
		{ label: 'Reminders', icon: 'Bell' }
	];

	/** @type {boolean} */
	let open = $state(false);
</script>

<div class="overflow-auto">
	{#if open}
		<div class="flex h-10 items-center p-2">
			<span class="text-xs uppercase">Quick Fitlers</span>
			<div class="grow"></div>
			<button onclick={() => (open = false)}><Icon name="X" /></button>
		</div>
	{:else}
		<button class="h-10 p-2 hover:bg-gray-200" onclick={() => (open = true)}>
			<Icon class="h-5 w-5" name="ArrowRight" />
		</button>
	{/if}
	<ul>
		{#each filters as filter}
			<li>
				<button class="flex h-10 w-full items-center gap-2 p-2 hover:bg-gray-200">
					<Icon class="h-5 w-5" name={filter.icon} />
					<span class:hidden={!open}>{filter.label}</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
