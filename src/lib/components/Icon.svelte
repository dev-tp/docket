<script module>
	import {
		Activity,
		ArrowDown,
		ArrowRight,
		ArrowUp,
		Banknote,
		Bell,
		BoneFracture,
		BookBookmark,
		Briefcase,
		BriefcaseMedical,
		Calendar,
		CarFront,
		ChartNoAxesColumn,
		ChevronDown,
		ChevronFirst,
		ChevronLast,
		ChevronLeft,
		ChevronRight,
		CircleCheck,
		CircleQuestionMark,
		CircleUserRound,
		CircleX,
		ClipboardCheck,
		ClipboardList,
		Contact,
		CreditCardCheck,
		FileText,
		Flag,
		GitMergeConflict,
		GraduationCap,
		Handshake,
		LayoutTemplate,
		Link,
		ListFilter,
		Mail,
		Mailbox,
		Menu,
		MessagesSquare,
		Pencil,
		Phone,
		Plus,
		Printer,
		ReceiptText,
		RefreshCw,
		Scale,
		Scroll,
		Search,
		SlidersHorizontal,
		StickyNote,
		Tag,
		Timer,
		UserGroup,
		UserRoundArrowLeft,
		UserSearch,
		Wrench,
		X,
		Zap
	} from '@lucide/svelte';

	/** @typedef {keyof icons} Icon */
	const icons = {
		Activity,
		ArrowDown,
		ArrowRight,
		ArrowUp,
		Banknote,
		Bell,
		BoneFracture,
		BookBookmark,
		Briefcase,
		BriefcaseMedical,
		Calendar,
		CarFront,
		ChartNoAxesColumn,
		ChevronDown,
		ChevronFirst,
		ChevronLast,
		ChevronLeft,
		ChevronRight,
		CircleCheck,
		CircleQuestionMark,
		CircleUserRound,
		CircleX,
		ClipboardCheck,
		ClipboardList,
		Contact,
		CreditCardCheck,
		FileText,
		Flag,
		GitMergeConflict,
		GraduationCap,
		Handshake,
		LayoutTemplate,
		Link,
		ListFilter,
		Mail,
		Mailbox,
		Menu,
		MessagesSquare,
		Pencil,
		Phone,
		Plus,
		Printer,
		ReceiptText,
		RefreshCw,
		Scale,
		Scroll,
		Search,
		SlidersHorizontal,
		StickyNote,
		Tag,
		Timer,
		UserGroup,
		UserRoundArrowLeft,
		UserSearch,
		Wrench,
		X,
		Zap
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
