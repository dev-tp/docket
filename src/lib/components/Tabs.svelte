<script module>
	/**
	 * @typedef {Object} Tab
	 * @property {import('$lib/components/Icon.svelte').Icon} [icon]
	 * @property {string} label
	 * @property {import('svelte').Snippet} [content]
	 *
	 * @typedef {Object} Props
	 * @property {Tab[]} content
	 */
</script>

<script>
	import { clsx } from '$lib';
	import Icon from '$lib/components/Icon.svelte';

	/** @type {Props} */
	const { content: tabs } = $props();

	/** @type {number} */
	let selected = $state(0);
</script>

<div class="flex gap-1 border-b text-teal-700">
	{#each tabs as tab, i}
		<button
			class={clsx(
				'flex items-center gap-2 border border-b-0 px-2 py-1',
				selected === i ? 'border-red-500 bg-red-500 text-white' : ''
			)}
			onclick={() => (selected = i)}
			type="button"
		>
			{#if tab.icon}
				<Icon name={tab.icon} />
			{/if}
			{tab.label}
		</button>
	{/each}
</div>
{#each tabs as tab, i}
	<div class:hidden={selected !== i}>
		{@render tab.content?.()}
	</div>
{/each}
