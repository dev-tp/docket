<script>
	import Icon from '$lib/components/Icon.svelte';
	import EmailField from './EmailField.svelte';

	let fields = $state([{}]);
</script>

<fieldset class="grid content-baseline gap-4">
	<div>
		<legend>Emails</legend>
	</div>
	{#each fields as _}
		<EmailField />
	{/each}
	<div>
		<button class="flex items-center gap-2" onclick={() => fields.push({})} type="button">
			<Icon name="Plus" />
			Add Email
		</button>
	</div>
</fieldset>
