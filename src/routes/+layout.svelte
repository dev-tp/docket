<script>
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import './layout.css';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Docket</title>
</svelte:head>

<div class="flex h-screen flex-col">
	<Nav />
	<div class="grow overflow-auto p-4">
		{@render children()}
	</div>
</div>
