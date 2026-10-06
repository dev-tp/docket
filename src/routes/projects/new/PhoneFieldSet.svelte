<script>
	import Icon from '$lib/components/Icon.svelte';
	import PhoneField from './PhoneField.svelte';

	let fields = $state([{}]);
</script>

<fieldset class="grid content-baseline gap-4">
	<div>
		<legend>Phones</legend>
	</div>
	{#each fields as _}
		<PhoneField />
	{/each}
	<div>
		<button class="flex items-center gap-2" onclick={() => fields.push({})} type="button">
			<Icon name="Plus" />
			Add Phone
		</button>
	</div>
</fieldset>
