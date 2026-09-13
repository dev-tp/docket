<script>
	import Icon from './Icon.svelte';
	import SearchBar from './SearchBar.svelte';
</script>

<nav class="flex w-full border-b bg-sky-900 p-4 text-white">
	<ul class="flex items-center gap-4">
		<li class="flex">
			<button><Icon class="h-5 w-5" name="Menu" /></button>
		</li>
		<li><a href="/tasks">Tasks</a></li>
		<li><a href="/feed">Feed</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/documents">Documents</a></li>
	</ul>
	<div class="grow"></div>
	<ul class="flex items-center gap-8">
		<li><SearchBar /></li>
		<li><button><Icon class="h-6 w-6" name="Timer" /></button></li>
		<li><button><Icon class="h-6 w-6" name="CircleQuestionMark" /></button></li>
		<li><button><Icon class="h-6 w-6" name="CircleUserRound" /></button></li>
	</ul>
</nav>
