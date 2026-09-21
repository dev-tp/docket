<script>
	import Icon from '$lib/components/Icon.svelte';

	let hasAttachment = $state(false);
	let isMessage = $state(false);
	let value = $state('');
</script>

<form
	class="grid gap-4"
	class:border={value !== ''}
	class:border-gray-300={value !== ''}
	class:p-4={value !== ''}
	class:rounded-sm={value !== ''}
	class:shadow-lg={value !== ''}
>
	<div class="flex items-center gap-2 border px-2 py-1">
		<Icon name="StickyNote" />
		<textarea bind:value class="field-sizing-content grow outline-none" placeholder="Write a note"
		></textarea>
	</div>
	<div class="grid gap-4" class:hidden={value === ''}>
		<div>
			<button class="flex items-center gap-2 text-sm text-teal-700">
				<Icon name="Pencil" />
				Add Tags
			</button>
		</div>
		{#if isMessage}
			<div class="flex items-center gap-2">
				<button onclick={() => (isMessage = false)}><Icon name="CircleX" /></button>
				<span class="text-sm">From</span>
				<div class="grow">
					<select class="h-8 w-full border px-1">
						<option>Mailroom (Default)</option>
					</select>
				</div>
				<span class="text-sm">to</span>
				<div class="grow">
					<input class="h-8 w-full border px-1" type="text" value="Test" />
				</div>
				<span class="text-sm">at</span>
				<div class="grow">
					<select class="h-8 w-full border px-1">
						<option>(000) 000-0000</option>
					</select>
				</div>
			</div>
			<hr class="text-gray-400" />
		{/if}
		{#if hasAttachment}
			<div class="flex items-center gap-2">
				<button onclick={() => (hasAttachment = false)}><Icon name="CircleX" /></button>
				<div class="flex h-8 w-75 items-center gap-2 border px-2">
					<Icon name="Paperclip" />
					<span class="text-gray-400">Attach a Project Document</span>
				</div>
				<span class="text-sm">or</span>
				<label class="flex cursor-pointer items-center gap-2 border px-2 py-1">
					<Icon name="Upload" />
					Upload
					<input class="hidden" type="file" />
				</label>
			</div>
			<hr class="text-gray-400" />
		{/if}
		<div class="flex items-center">
			<div class="flex gap-4">
				<button onclick={() => (hasAttachment = true)} type="button">
					<Icon name="Paperclip" />
				</button>
				<button onclick={() => (isMessage = true)} type="button">
					<Icon name="MessageSquare" />
				</button>
				<button type="button"><Icon name="ClockPlus" /></button>
				<button type="button"><Icon name="AtSign" /></button>
				<button type="button"><Icon name="Tag" /></button>
			</div>
			<div class="grow"></div>
			<button class="bg-teal-500 px-4 py-1 text-white" type="submit">Create</button>
		</div>
	</div>
</form>
