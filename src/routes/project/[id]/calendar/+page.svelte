<script>
	const weekdayLabels = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	const monthFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric'
	});

	const today = new Date();
	let viewDate = $state(new Date(today.getFullYear(), today.getMonth(), 1));

	/** @param {Date} date */
	function startOfMonth(date) {
		return new Date(date.getFullYear(), date.getMonth(), 1);
	}

	/** @param {Date} date
	 * @param {number} delta
	 */
	function addMonths(date, delta) {
		return new Date(date.getFullYear(), date.getMonth() + delta, 1);
	}

	/** @param {Date} a
	 * @param {Date} b
	 */
	function isSameDay(a, b) {
		return (
			a.getFullYear() === b.getFullYear() &&
			a.getMonth() === b.getMonth() &&
			a.getDate() === b.getDate()
		);
	}

	/** @param {Date} date */
	function getMonthGrid(date) {
		const firstOfMonth = startOfMonth(date);
		const firstCell = new Date(firstOfMonth);
		firstCell.setDate(firstCell.getDate() - firstCell.getDay());

		return Array.from({ length: 42 }, (_, index) => {
			const value = new Date(firstCell);
			value.setDate(firstCell.getDate() + index);

			return {
				date: value,
				isCurrentMonth: value.getMonth() === date.getMonth(),
				isToday: isSameDay(value, today)
			};
		});
	}

	const monthGrid = $derived(getMonthGrid(viewDate));
	const monthLabel = $derived(monthFormatter.format(viewDate));

	function goToToday() {
		viewDate = startOfMonth(today);
	}
</script>

<div class="flex h-full min-h-0 flex-col">
	<div class="mb-4 flex flex-wrap items-center gap-2">
		<button
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
			onclick={goToToday}
			type="button"
		>
			Today
		</button>
		<button
			aria-label="Previous month"
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
			onclick={() => (viewDate = addMonths(viewDate, -1))}
			type="button"
		>
			&lt;
		</button>
		<button
			aria-label="Next month"
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
			onclick={() => (viewDate = addMonths(viewDate, 1))}
			type="button"
		>
			&gt;
		</button>

		<h2 class="ml-2 text-xl font-medium">{monthLabel}</h2>

		<div class="grow"></div>

		<button
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm font-medium hover:bg-gray-50"
			type="button"
		>
			+ Create Event
		</button>
		<button
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
			type="button"
		>
			Month
		</button>
	</div>

	<div
		class="grid grid-cols-7 border border-b-0 border-gray-300 bg-gray-50 text-center text-xs font-semibold text-gray-700"
	>
		{#each weekdayLabels as label}
			<div class="border-r border-gray-300 py-2 last:border-r-0">{label}</div>
		{/each}
	</div>

	<div
		class="grid grow grid-cols-7 border border-gray-300"
		style="grid-template-rows: repeat(6, minmax(96px, 1fr));"
	>
		{#each monthGrid as day}
			<div
				class="border-r border-b border-gray-300 p-2 text-sm last:border-r-0"
				class:bg-amber-50={!day.isCurrentMonth}
				class:bg-sky-100={day.isToday}
			>
				<div class="text-right text-gray-700">{day.date.getDate()}</div>
			</div>
		{/each}
	</div>
</div>
