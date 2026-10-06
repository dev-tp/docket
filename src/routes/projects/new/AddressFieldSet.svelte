<script>
	import Icon from '$lib/components/Icon.svelte';

	let fields = $state([{}]);
</script>

<fieldset class="grid content-baseline gap-4">
	<div>
		<legend>Phones</legend>
	</div>
	{#each fields as _}
		<div class="flex items-center gap-2">
			<div class="cursor-grab"><Icon name="GripVertical" /></div>
			<label class="grid grow gap-1">
				<div class="flex">
					<button class="flex items-center gap-1 text-sm" type="button">
						Address
						<Icon name="ChevronDown" />
					</button>
					<div class="grow"></div>
					<div class="flex gap-2">
						<button class="border p-2" type="button"><Icon name="Copy" /></button>
						<button class="border p-2" type="button"><Icon name="MessageSquare" /></button>
						<button type="button"><Icon name="CircleX" /></button>
					</div>
				</div>
				<div class="grid gap-2">
					<input class="w-full border px-2 py-1" placeholder="Location Name" type="text" />
					<input class="w-full border px-2 py-1" placeholder="Street address" type="text" />
					<input class="w-full border px-2 py-1" placeholder="Apartment, suite, etc." type="text" />
					<input class="w-full border px-2 py-1" placeholder="City" type="text" />
				</div>
			</label>
		</div>
	{/each}
	<div>
		<button class="flex items-center gap-2" onclick={() => fields.push({})} type="button">
			<Icon name="Plus" />
			Add Address
		</button>
	</div>
</fieldset>
