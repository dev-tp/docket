<script>
	import Icon from '$lib/components/Icon.svelte';

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
			<h1 class="text-xl">... vs Doe, John</h1>
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
			<select class="border px-2 py-1">
				<option value="closed-dropped">Closed (Dropped)</option>
			</select>
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
		<div class="flex flex-col">
			<div class="mb-2 flex items-center gap-2 border px-2 py-1">
				<Icon name="ListFilter" />
				<input class="outline-none" placeholder="Filter Menu" type="text" />
			</div>
			<ul class="overflow-auto">
				<li><a href="/">Activity</a></li>
				<li><a href="/">Billing</a></li>
				<li><a href="/">Calendar</a></li>
				<li><a href="/">Team</a></li>
				<li><a href="/">CM Tasks</a></li>
				<li><a href="/">Intake</a></li>
				<li><a href="/">Docs</a></li>
				<li><a href="/">Medicals</a></li>
				<li><a href="/">Loss of Earnings</a></li>
				<li><a href="/">Property Damage</a></li>
				<li><a href="/">Negotiations</a></li>
				<li><a href="/">Expenses</a></li>
				<li><a href="/">Case Cost Funding</a></li>
				<li><a href="/">Case Summary</a></li>
				<li><a href="/">Treatment</a></li>
				<li><a href="/">Insurance</a></li>
				<li><a href="/">Liens</a></li>
				<li><a href="/">Related Cases</a></li>
				<li><a href="/">Contacts</a></li>
				<li><a href="/">Parties</a></li>
				<li><a href="/">Deadline Chain</a></li>
				<li><a href="/">Hearing</a></li>
				<li><a href="/">Trust Accounting</a></li>
				<li><a href="/">Witnesses</a></li>
				<li><a href="/">Settlement</a></li>
				<li><a href="/">Damages</a></li>
				<li><a href="/">Experts</a></li>
				<li><a href="/">Depos</a></li>
				<li><a href="/">Written Discovery</a></li>
				<li><a href="/">Pleading Index</a></li>
				<li><a href="/">Reminders</a></li>
				<li><a href="/">Checks Received</a></li>
				<li><a href="/">Conflicts</a></li>
				<li><a href="/">Red Flags</a></li>
				<li><a href="/">Negotiations (DNU)</a></li>
			</ul>
			<div class="flex flex-col">
				<button class="text-start">Search</button>
				<button class="text-start">Manage Sections</button>
			</div>
		</div>
		<ul class="overflow-auto">
			<li><button class="p-2"><Icon class="h-6 w-6" name="ArrowRight" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="Zap" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="StickyNote" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="Mail" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="Printer" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="MessagesSquare" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="CircleCheck" /></button></li>
			<li><button class="p-2"><Icon class="h-6 w-6" name="Bell" /></button></li>
		</ul>
		<div class="grow overflow-auto"></div>
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
				<div class="grow overflow-auto">
					<div class="mb-2 border-b border-teal-700 text-teal-700">
						<button class="border border-b-0 border-inherit bg-teal-500 px-4 py-2 text-white">
							Vitals
						</button>
						<button class="border border-b-0 px-4 py-2">Details</button>
						<button class="border border-b-0 px-4 py-2">Settings</button>
					</div>
					<div class="text-sm">
						<div class="grid grid-cols-2 gap-2">
							{#each Object.entries(vitalHeaders) as [header, value]}
								<div class="text-sky-700">{header}</div>
								<div>{value}</div>
							{/each}
						</div>
					</div>
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
