<script>
	import Icon from '$lib/components/Icon.svelte';
	import EditContactForm from './EditContactForm.svelte';

	/** @type {HTMLDialogElement} */
	let dialog;
</script>

<button class="rounded-sm border px-2" onclick={() => dialog.showModal()} type="button">
	<Icon name="UserSearch" />
</button>

<dialog
	bind:this={dialog}
	class="backdrop:bg-black/50 [:modal]:m-auto [:modal]:mt-4 [:modal]:w-3/4 [:modal]:rounded-xs"
>
	<form class="p-8" method="dialog">
		<EditContactForm />
	</form>
</dialog>
