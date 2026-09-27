<script>
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import EditableHeader from './EditableHeader.svelte';
	import Nav from './Nav.svelte';

	const { children, data } = $props();

	let showVitals = $state(true);
	let showVitalHeaders = $state(false);

	const vitalHeaders = {
		'Case Manager:': '',
		'Liability Accepted:': '',
		'Next Due Type': '',
		'Next Due Date': '',
		'Govt Claim:': '',
		'Claim Type:': '',
		'3rd Party Policy Limits': '',
		'UM/UIM Policy Limits': '',
		'Med Pay/PIP Policy Limits': '',
		'PD Impact:': '',
		'Case Grade:': '',
		'Accident Type:': '',
		'SOL:': '',
		'Date of Loss:': '',
		'Howell Meds Total:': '',
		'Referred From:': ''
	};
</script>

<div class="flex h-full flex-col">
	<div class="mb-4 flex items-start">
		<div class="grid gap-2">
			<div>
				<EditableHeader
					request="/api/project/{page.params.id}"
					setRequestOptions={(value) => ({ body: JSON.stringify({ name: value }), method: 'PUT' })}
					value={data.project?.name}
				/>
			</div>
			<div class="flex gap-4 text-sm">
				<button class="flex items-center gap-2">
					<Icon name="Contact" />
					Contact
				</button>
				<a class="flex items-center gap-2" href="tel:+00000000000">
					<Icon name="Phone" />
					<span class="text-sky-700">(000) 000-0000</span>
				</a>
				<a class="flex items-center gap-2" href="mailto:user@example.com">
					<Icon name="Mail" />
					<span class="text-sky-700">user@example.com</span>
				</a>
			</div>
		</div>
		<div class="grow"></div>
		<div class="flex gap-2">
			<form action="/project/{page.params.id}/?/updatePhase" method="POST">
				<select
					class="border px-2 py-1"
					name="phase"
					onchange={(event) => event.currentTarget.form?.submit()}
				>
					{#each data.phases as phase}
						<option selected={phase.id === data.project?.phaseId} value={phase.id}>
							{phase.name}
						</option>
					{/each}
				</select>
			</form>
			<button
				class="flex items-center gap-2 rounded-sm bg-teal-500 px-4 py-1 text-white hover:bg-teal-600"
				onclick={() => (showVitals = !showVitals)}
			>
				Vitals
				<Icon name="Activity" />
			</button>
			<button
				class="rounded-sm border px-2 py-1"
				class:bg-teal-600={showVitalHeaders}
				onclick={() => (showVitalHeaders = !showVitalHeaders)}
			>
				<Icon name="ChevronDown" />
			</button>
		</div>
	</div>
	{#if showVitalHeaders}
		<div class="mb-4 grid grid-cols-8 gap-4 text-xs">
			{#each Object.entries(vitalHeaders) as [header, value]}
				<div>
					<p class="text-sky-700">{header}</p>
					<p>{value}</p>
				</div>
			{/each}
		</div>
	{/if}
	<div class="flex grow overflow-auto">
		<Nav />
		<div class="grow overflow-auto">
			{@render children()}
		</div>
		{#if showVitals}
			<div class="flex w-75 flex-col gap-4 overflow-auto p-4 pb-0">
				<div class="flex">
					<h2 class="text-lg">Vitals</h2>
					<div class="grow"></div>
					<button onclick={() => (showVitals = false)}><Icon name="X" /></button>
				</div>
				<div class="flex gap-2">
					<div class="flex items-center gap-2">
						<Icon name="Tag" />
						<span>Tags</span>
					</div>
					<div class="grow content-center"><hr /></div>
					<button class="flex items-center gap-2 text-teal-700">
						<Icon name="Pencil" />
						Edit
					</button>
				</div>
				<div class="group grow overflow-auto">
					<div
						class="sticky top-0 mb-2 flex gap-1 border-b border-teal-700 text-teal-700 backdrop-blur-lg *:cursor-pointer *:border *:border-b-0 *:border-inherit *:px-4 *:py-2"
					>
						<label
							class="group-has-[#tab-1:checked]:bg-teal-500 group-has-[#tab-1:checked]:text-white"
							for="tab-1"
						>
							Vitals
						</label>
						<label
							class="group-has-[#tab-2:checked]:bg-teal-500 group-has-[#tab-2:checked]:text-white"
							for="tab-2"
						>
							Details
						</label>
						<label
							class="group-has-[#tab-3:checked]:bg-teal-500 group-has-[#tab-3:checked]:text-white"
							for="tab-3"
						>
							Settings
						</label>
					</div>
					<input class="peer/tab-1 sr-only" id="tab-1" name="vitals" type="radio" checked />
					<input class="peer/tab-2 sr-only" id="tab-2" name="vitals" type="radio" />
					<input class="peer/tab-3 sr-only" id="tab-3" name="vitals" type="radio" />
					<div class="hidden text-sm peer-checked/tab-1:block">
						<div class="grid grid-cols-2 gap-2">
							{#each Object.entries(vitalHeaders) as [header, value]}
								<div class="text-sky-700">{header}</div>
								<div>{value}</div>
							{/each}
						</div>
					</div>
					<div class="hidden text-sm peer-checked/tab-2:block">Details</div>
					<div class="hidden text-sm peer-checked/tab-3:block">Settings</div>
				</div>
				<div class="flex">
					<button class="flex items-center gap-2">
						<Icon name="RefreshCw" />
						Refresh
					</button>
					<div class="grow"></div>
					<button>Configure</button>
				</div>
			</div>
		{/if}
	</div>
</div>
