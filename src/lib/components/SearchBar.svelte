<script module>
	/**
	 * @typedef {Object} Props
	 * @property {string} [placeholder]
	 */
</script>

<script>
	import Icon from './Icon.svelte';

	/** @type {Props} */
	const { placeholder = 'Search' } = $props();
</script>

<div class="flex items-center gap-2 rounded-xs border py-0.5 pl-2">
	<Icon name="Search" />
	<input class="outline-none" type="search" {placeholder} />
</div>
