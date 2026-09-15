<script module>
	/**
	 * @typedef {Object} Props
	 * @property {string} [placeholder]
	 * @property {string} [value]
	 */
</script>

<script>
	import Icon from './Icon.svelte';

	/** @type {Props} */
	let { placeholder = 'Search', value = $bindable('') } = $props();
</script>

<div class="flex items-center gap-2 rounded-xs border px-2 py-0.5">
	<Icon name="Search" />
	<input bind:value class="outline-none" type="search" {placeholder} />
	<button class:opacity-0={value === ''}><Icon name="CircleX" /></button>
</div>
