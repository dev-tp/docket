<script module>
	import {
		ArrowDown,
		ArrowUp,
		Calendar,
		ChartNoAxesColumn,
		ChevronDown,
		ChevronFirst,
		ChevronLast,
		ChevronLeft,
		ChevronRight,
		CircleQuestionMark,
		CircleUserRound,
		CircleX,
		ClipboardCheck,
		ClipboardList,
		Contact,
		Mailbox,
		Menu,
		MessagesSquare,
		Plus,
		Search,
		SlidersHorizontal,
		Timer,
		Wrench,
		X
	} from '@lucide/svelte';

	/** @typedef {keyof icons} Icon */
	const icons = {
		ArrowDown,
		ArrowUp,
		Calendar,
		ChartNoAxesColumn,
		ChevronDown,
		ChevronFirst,
		ChevronLast,
		ChevronLeft,
		ChevronRight,
		CircleQuestionMark,
		CircleUserRound,
		CircleX,
		ClipboardCheck,
		ClipboardList,
		Contact,
		Mailbox,
		Menu,
		MessagesSquare,
		Plus,
		Search,
		SlidersHorizontal,
		Timer,
		Wrench,
		X
	};

	/**
	 * @import { LucideProps } from '@lucide/svelte'
	 * @import { Component } from 'svelte'
	 *
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {Icon} name
	 */
</script>

<script>
	/** @type {Props} */
	const { name, ...props } = $props();

	/** @type {Component<LucideProps, {}, ''>} */
	const Icon = $derived(icons[name]);
</script>

<Icon class="h-4 w-4" {...props} />
