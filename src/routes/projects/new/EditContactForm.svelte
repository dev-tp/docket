<script>
	import Icon from '$lib/components/Icon.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import AddressFieldSet from './AddressFieldSet.svelte';
	import EmailFieldSet from './EmailFieldSet.svelte';
	import PhoneFieldSet from './PhoneFieldSet.svelte';
</script>

<div class="group">
	<div class="flex gap-1 border-b text-teal-700">
		<label
			class="flex cursor-pointer items-center gap-2 border border-b-0 px-4 py-2 group-has-[#tab-1:checked]:border-orange-800 group-has-[#tab-1:checked]:bg-orange-600 group-has-[#tab-1:checked]:text-white"
			for="tab-1"
		>
			<Icon name="Info" />
			Contact Information
		</label>
		<input class="sr-only" id="tab-1" name="contact" type="radio" checked />
		<label
			class="flex cursor-pointer items-center gap-2 border border-b-0 px-4 py-2 group-has-[#tab-2:checked]:border-orange-800 group-has-[#tab-2:checked]:bg-orange-600 group-has-[#tab-2:checked]:text-white"
			for="tab-2"
		>
			<Icon name="Contact" />
			Details
		</label>
		<input class="sr-only" id="tab-2" name="contact" type="radio" />
		<label
			class="flex cursor-pointer items-center gap-3 border border-b-0 px-4 py-3 group-has-[#tab-3:checked]:border-orange-800 group-has-[#tab-3:checked]:bg-orange-600 group-has-[#tab-3:checked]:text-white"
			for="tab-3"
		>
			<Icon name="Folder" />
			Associated Projects
		</label>
		<input class="sr-only" id="tab-3" name="contact" type="radio" />
	</div>
	<div class="hidden group-has-[#tab-1:checked]:block">
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
				<TextField label="First Name" placeholder="First Name" required />
				<TextField label="Middle Name" placeholder="Middle Name" />
				<TextField label="Last Name" placeholder="Last Name" />
				<TextField label="Client Entity ID" info="Unique ID for customer use" />
			</div>
			<div class="flex gap-4">
				<TextField label="Prefix" placeholder="e.g. Mr, Ms" />
				<TextField label="Sufix" placeholder="e.g. Jr, Sr" />
				<TextField label="Nickname" placeholder="Nickname" />
				<label class="grid gap-1">
					<span class="text-xs">Primary Language</span>
					<select class="h-8 w-full border px-2 py-1">
						<option value="">Select a language</option>
					</select>
				</label>
				<TextField label="Date of Birth" type="date" />
				<div class="flex grow items-baseline-last justify-center">
					<label class="flex cursor-pointer items-center gap-2">
						<input type="checkbox" />
						Deceased
					</label>
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
	</div>
	<div class="hidden group-has-[#tab-2:checked]:block"></div>
	<div class="hidden group-has-[#tab-3:checked]:block"></div>
</div>
