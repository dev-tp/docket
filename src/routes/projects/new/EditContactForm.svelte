<script>
	import Icon from '$lib/components/Icon.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import AddressFieldSet from './AddressFieldSet.svelte';
	import EmailFieldSet from './EmailFieldSet.svelte';
	import PhoneFieldSet from './PhoneFieldSet.svelte';
</script>

<Tabs
	content={[
		{ icon: 'Info', label: 'Contact Information', content: contactInformation },
		{ icon: 'Contact', label: 'Details' },
		{ icon: 'Folder', label: 'Associated Projects' }
	]}
/>

{#snippet contactInformation()}
	<section class="grid gap-4 border-b border-gray-500 pt-4 pb-8">
		<div class="flex gap-4">
			<label class="flex cursor-pointer items-center" title="Individual or business?">
				<input class="peer sr-only" type="checkbox" />
				<div
					class="border border-black bg-teal-500 p-2 pr-2 text-white peer-checked:bg-transparent peer-checked:text-black"
				>
					<Icon class="h-5 w-5" name="User" />
				</div>
				<div
					class="border border-l-0 border-black p-2 pl-2 text-black peer-checked:bg-teal-500 peer-checked:text-white"
				>
					<Icon class="h-5 w-5" name="BuildingComplex" />
				</div>
			</label>
			<div class="grow"><TextField label="First Name" placeholder="First Name" required /></div>
			<div class="grow"><TextField label="Middle Name" placeholder="Middle Name" /></div>
			<div class="grow"><TextField label="Last Name" placeholder="Last Name" /></div>
			<div class="grow">
				<TextField label="Client Entity ID" info="Unique ID for customer use" />
			</div>
		</div>
		<div class="flex gap-4">
			<div class="grow"><TextField label="Prefix" placeholder="e.g. Mr, Ms" /></div>
			<div class="grow"><TextField label="Sufix" placeholder="e.g. Jr, Sr" /></div>
			<div class="grow"><TextField label="Nickname" placeholder="Nickname" /></div>
			<div class="grow">
				<label class="grid gap-1">
					<span class="text-xs">Primary Language</span>
					<select class="h-8 w-full border px-2 py-1">
						<option value="">Select a language</option>
					</select>
				</label>
			</div>
			<div class="grow"><TextField label="Date of Birth" type="date" /></div>
			<div class="flex grow items-baseline-last justify-center">
				<div class="grow">
					<label class="flex cursor-pointer items-center gap-2">
						<input type="checkbox" />
						Deceased
					</label>
				</div>
			</div>
		</div>
	</section>
	<section class="flex gap-4 border-b border-gray-500 pt-4 pb-8">
		<div class="grow"><TextField label="Company Title" /></div>
		<div class="grow"><TextField label="Department" /></div>
		<div class="grow"><TextField label="Job Title" /></div>
	</section>
	<section class="grid grid-cols-2 gap-4 pt-4 pb-8">
		<PhoneFieldSet />
		<EmailFieldSet />
		<AddressFieldSet />
	</section>
{/snippet}
