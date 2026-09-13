<script>
	import {
		ArrowDown,
		ArrowUp,
		ChevronDown,
		CircleQuestionMark,
		CircleUserRound,
		CircleX,
		Menu,
		MessagesSquare,
		Plus,
		Search,
		Timer
	} from '@lucide/svelte';

	/** @typedef {keyof icons} Icon */
	const icons = {
		ArrowDown,
		ArrowUp,
		ChevronDown,
		CircleQuestionMark,
		CircleUserRound,
		CircleX,
		Menu,
		MessagesSquare,
		Plus,
		Search,
		Timer
	};

	/** @type {{ class?: string, name: Icon }} */
	const { name, ...props } = $props();

	/** @type {import('svelte').Component<import('@lucide/svelte').LucideProps, {}, ''>} */
	const Icon = $derived(icons[name]);
</script>

<Icon class="h-4 w-4" {...props} />
