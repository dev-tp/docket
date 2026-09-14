<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<h1 class="mb-4 text-xl">New Project</h1>
<div class="m-auto w-1/3">
	<form class="grid gap-4">
		<label class="flex flex-col">
			<span>Project Type<span>*</span></span>
			<select class="border px-2 py-1 text-base">
				<option value="Personal Injury">Personal Injury</option>
			</select>
		</label>
		<label>
			<span>Add Client</span>
			<div class="flex gap-2">
				<div class="grow">
					<input class="w-full border px-2 py-1" placeholder="Search for client" type="text" />
				</div>
				<button class="rounded-sm border px-2"><Icon name="UserSearch" /></button>
			</div>
		</label>
		<label>
			<span>Project Name</span>
			<div>
				<input class="w-full border px-2 py-1" placeholder="Project Name" type="text" />
			</div>
		</label>
		<label>
			<span>Add a Team</span>
			<div>
				<input
					class="w-full border px-2 py-1"
					placeholder="Team name or team description"
					type="text"
				/>
			</div>
			<p class="mt-2 text-sm">
				To add a team <span class="font-bold">within this org</span> enter a team name or team description.
			</p>
		</label>
		<div class="flex justify-end">
			<button class="rounded-sm bg-teal-500 px-3 py-1 text-white hover:bg-teal-600" type="submit">
				Create
			</button>
		</div>
	</form>
</div>
