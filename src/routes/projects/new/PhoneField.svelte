<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="flex items-center gap-2">
	<div class="cursor-grab"><Icon name="GripVertical" /></div>
	<label class="grid grow gap-1">
		<div>
			<button class="flex items-center gap-1 text-sm" type="button">
				Phone
				<Icon name="ChevronDown" />
			</button>
		</div>
		<div class="flex gap-2">
			<div class="grow">
				<input class="w-full border px-2 py-1" placeholder="Enter a phone number" type="text" />
			</div>
			<div><input class="w-full border px-2 py-1" placeholder="Extension" type="text" /></div>
			<button class="border p-2" type="button"><Icon name="Phone" /></button>
			<button class="border p-2" type="button"><Icon name="MessageSquare" /></button>
			<button type="button"><Icon name="CircleX" /></button>
		</div>
	</label>
</div>
