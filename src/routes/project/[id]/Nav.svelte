<script>
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';

	/** @type {{ label: string, route: string, icon: import('$lib/components/Icon.svelte').Icon}[]} */
	const links = [
		{ label: 'Activity', route: '', icon: 'MessagesSquare' },
		{ label: 'Billing', route: 'billing', icon: 'ReceiptText' },
		{ label: 'Calendar', route: 'calendar', icon: 'Calendar' },
		{ label: 'Team', route: 'team', icon: 'UserGroup' },
		{ label: 'CM Tasks', route: 'cm-tasks', icon: 'ClipboardCheck' },
		{ label: 'Intake', route: 'intake', icon: 'UserRoundArrowLeft' },
		{ label: 'Documents', route: 'documents', icon: 'FileText' },
		{ label: 'Medicals', route: 'medicals', icon: 'BriefcaseMedical' },
		{ label: 'Loss of Earnings', route: 'loss-of-earnings', icon: 'Zap' },
		{ label: 'Property Damage', route: 'property-damage', icon: 'CarFront' },
		{ label: 'Negotiations', route: 'negotiations', icon: 'Banknote' },
		{ label: 'Expenses', route: 'expenses', icon: 'Banknote' },
		{ label: 'Case Cost Funding', route: 'case-cost-funding', icon: 'Banknote' },
		{ label: 'Case Summary', route: 'case-summary', icon: 'Briefcase' },
		{ label: 'Treatment', route: 'treatment', icon: 'BriefcaseMedical' },
		{ label: 'Insurance', route: 'insurance', icon: 'Scroll' },
		{ label: 'Liens', route: 'liens', icon: 'BookBookmark' },
		{ label: 'Related Cases', route: 'related-cases', icon: 'Zap' },
		{ label: 'Contacts', route: 'contacts', icon: 'Contact' },
		{ label: 'Parties', route: 'parties', icon: 'Handshake' },
		{ label: 'Deadline Chain', route: 'deadline-chain', icon: 'Link' },
		{ label: 'Hearing', route: 'hearing', icon: 'Zap' },
		{ label: 'Trust Accounting', route: 'trust-accounting', icon: 'Banknote' },
		{ label: 'Witnesses', route: 'witnesses', icon: 'Search' },
		{ label: 'Settlement', route: 'settlement', icon: 'Banknote' },
		{ label: 'Damages', route: 'damages', icon: 'BoneFracture' },
		{ label: 'Experts', route: 'experts', icon: 'GraduationCap' },
		{ label: 'Depositions', route: 'depositions', icon: 'FileText' },
		{ label: 'Written Discovery', route: 'written-discovery', icon: 'BookBookmark' },
		{ label: 'Pleading Index', route: 'pleading-index', icon: 'FileText' },
		{ label: 'Reminders', route: 'reminders', icon: 'Bell' },
		{ label: 'Checks Received', route: 'checks-received', icon: 'CreditCardCheck' },
		{ label: 'Conflicts', route: 'conflicts', icon: 'GitMergeConflict' },
		{ label: 'Red Flags', route: 'red-flags', icon: 'Flag' },
		{ label: 'Negotiations (DNU)', route: 'negotiations-dnu', icon: 'Scale' }
	];

	/** @type {string} */
	const path = `/project/${page.params.id}`;
</script>

<div class="flex flex-col">
	<div class="mb-2 flex items-center gap-2 border px-2 py-1">
		<Icon name="ListFilter" />
		<input class="outline-none" placeholder="Filter Menu" type="text" />
	</div>
	<ul class="overflow-auto">
		{#each links as link}
			<li>
				<a class="flex items-center gap-2 px-2 py-1 hover:bg-gray-200" href="{path}/{link.route}">
					<Icon name={link.icon} />
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
	<div class="flex flex-col">
		<button class="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
			<Icon name="Search" />
			Search
		</button>
		<button class="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
			<Icon name="LayoutTemplate" />
			Manage Sections
		</button>
	</div>
</div>
