<script module>
	/**
	 * @typedef {Object} Props
	 * @property {string | URL | Request} request
	 * @property {(value: string) => RequestInit} setRequestOptions
	 * @property {string | undefined} value
	 */
</script>

<script>
	import Icon from '$lib/components/Icon.svelte';

	/** @type {Props} */
	let { request, setRequestOptions, value } = $props();

	let editMode = $state(false);
	let newValue = $derived(value);

	function cancel() {
		editMode = false;
		newValue = value;
	}

	async function update() {
		if (!newValue) {
			return;
		}

		const response = await fetch(request, setRequestOptions(newValue));

		if (response.ok) {
			editMode = false;
			value = newValue;
		}
	}
</script>

{#if editMode}
	<div class="flex gap-2">
		<div class="grow">
			<input
				bind:value={newValue}
				class="w-full border text-xl"
				onkeyup={(event) => {
					if (event.key === 'Enter') {
						update();
					}
				}}
				type="text"
			/>
		</div>
		<button onclick={update}>Update</button>
		<button onclick={cancel}>Cancel</button>
	</div>
{:else}
	<button class="group flex items-center gap-1" onclick={() => (editMode = true)}>
		<h1 class="text-xl group-hover:underline">{value}</h1>
		<Icon class="hidden h-4 w-4 group-hover:block" name="Pencil" />
	</button>
{/if}
