<script module>
	/**
	 * @typedef {Object} Props
	 * @property {string} [info]
	 * @property {string} label
	 * @property {string} [name]
	 * @property {string} [placeholder]
	 * @property {boolean} [required]
	 * @property {'date' | 'text'} [type]
	 * @property {string} [value]
	 */
</script>

<script>
	import Icon from './Icon.svelte';

	/** @type {Props} */
	let { info, label, name, placeholder, required, type = 'text', value } = $props();
</script>

<label class="grid content-baseline gap-1">
	<span class="text-xs">{label} <span class="text-red-500">{required ? '*' : ''}</span></span>
	<div class="grow">
		<input bind:value class="w-full border px-2 py-1" {name} {placeholder} {required} {type} />
	</div>
	{#if info}
		<span class="flex items-center gap-1 text-xs text-gray-500">
			<Icon name="CircleQuestionMark" />{info}
		</span>
	{/if}
</label>
