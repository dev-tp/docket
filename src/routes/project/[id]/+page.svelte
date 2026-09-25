<script>
	import NewNote from './NewNote.svelte';
	import QuickFilters from './QuickFilters.svelte';
</script>

<div class="flex">
	<QuickFilters />
	<div class="grow">
		<NewNote />
	</div>
</div>
