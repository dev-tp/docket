<script>
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import './layout.css';

	const { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Nav />
<div class="p-4">
	{@render children()}
</div>
