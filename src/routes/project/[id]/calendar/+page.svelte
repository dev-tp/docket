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
	let selectedDate = $state(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
	let isEventModalOpen = $state(false);
	let selectedMonth = $state(today.getMonth());
	let selectedYear = $state(today.getFullYear());
	let calendarEvents = $state([
		{
			id: 1,
			title: 'Client Check-in',
			project: 'Foundation AI Test Matter',
			start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0).toISOString(),
			end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0).toISOString(),
			allDay: false,
			location: 'Virtual',
			notes: 'Weekly sync',
			attendees: 'team@company.com'
		},
		{
			id: 2,
			title: 'Milestone Review',
			project: 'Foundation AI Test Matter',
			start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2, 0, 0).toISOString(),
			end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2, 23, 59).toISOString(),
			allDay: true,
			location: '',
			notes: '',
			attendees: ''
		}
	]);

	const monthOptions = Array.from({ length: 12 }, (_, index) => ({
		value: index,
		label: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(2024, index, 1))
	}));

	const yearOptions = Array.from({ length: 12 }, (_, index) => today.getFullYear() - 5 + index);

	function createEventDraft(date = new Date()) {
		const from = new Date(date);
		const to = new Date(date);
		from.setHours(8, 0, 0, 0);
		to.setHours(9, 0, 0, 0);

		return {
			title: '',
			project: 'Foundation AI Test Matter',
			allDay: true,
			fromDate: toDateInputValue(date),
			fromTime: toTimeInputValue(from),
			toDate: toDateInputValue(date),
			toTime: toTimeInputValue(to),
			location: '',
			notes: '',
			addTimeTracking: false,
			attendees: ''
		};
	}

	let eventForm = $state(createEventDraft(new Date()));

	/** @param {Date} date */
	function toDateInputValue(date) {
		const year = date.getFullYear();
		const month = `${date.getMonth() + 1}`.padStart(2, '0');
		const day = `${date.getDate()}`.padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	/** @param {Date} date */
	function toTimeInputValue(date) {
		const hours = `${date.getHours()}`.padStart(2, '0');
		const minutes = `${date.getMinutes()}`.padStart(2, '0');
		return `${hours}:${minutes}`;
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
	function startOfMonth(date) {
		return new Date(date.getFullYear(), date.getMonth(), 1);
	}

	/** @param {Date} date
	 * @param {number} delta
	 */
	function addMonths(date, delta) {
		return new Date(date.getFullYear(), date.getMonth() + delta, 1);
	}

	/** @param {Date} date */
	function getMonthGrid(date) {
		const firstOfMonth = startOfMonth(date);
		const firstCell = new Date(firstOfMonth);
		firstCell.setDate(firstOfMonth.getDate() - firstCell.getDay());

		return Array.from({ length: 42 }, (_, index) => {
			const value = new Date(firstCell);
			value.setDate(firstCell.getDate() + index);

			return {
				date: value,
				isCurrentMonth: value.getMonth() === date.getMonth(),
				isToday: isSameDay(value, today),
				events: calendarEvents.filter((event) => {
					const startDate = new Date(event.start);
					const endDate = new Date(event.end);
					return value >= startDate && value <= endDate;
				})
			};
		});
	}

	const monthGrid = $derived(getMonthGrid(viewDate));
	const monthLabel = $derived(monthFormatter.format(viewDate));

	function goToToday() {
		const month = today.getMonth();
		const year = today.getFullYear();
		selectedMonth = month;
		selectedYear = year;
		viewDate = startOfMonth(today);
		selectedDate = new Date(year, month, today.getDate());
	}

	/** @param {number} delta */
	function moveMonth(delta) {
		const nextDate = new Date(selectedYear, selectedMonth + delta, 1);
		selectedYear = nextDate.getFullYear();
		selectedMonth = nextDate.getMonth();
		viewDate = new Date(nextDate);
		selectedDate = new Date(nextDate);
	}

	function applySelectedMonthYear() {
		viewDate = new Date(selectedYear, selectedMonth, 1);
		selectedDate = new Date(selectedYear, selectedMonth, 1);
	}

	function openCreateEvent(date = selectedDate) {
		selectedDate = new Date(date);
		eventForm = createEventDraft(date);
		isEventModalOpen = true;
	}

	function closeCreateEvent() {
		isEventModalOpen = false;
		eventForm = createEventDraft(selectedDate);
	}

	function saveEvent() {
		const title = eventForm.title.trim();
		if (!title) {
			return;
		}

		const fromDate = new Date(`${eventForm.fromDate}T${eventForm.allDay ? '00:00' : eventForm.fromTime}`);
		const toDate = new Date(`${eventForm.toDate}T${eventForm.allDay ? '23:59' : eventForm.toTime}`);

		calendarEvents = [
			...calendarEvents,
			{
				id: Date.now(),
				title,
				project: eventForm.project,
				start: fromDate.toISOString(),
				end: toDate.toISOString(),
				allDay: eventForm.allDay,
				location: eventForm.location,
				notes: eventForm.notes,
				attendees: eventForm.attendees
			}
		];

		isEventModalOpen = false;
		eventForm = createEventDraft(selectedDate);
	}
</script>

<div class="flex h-full min-h-0 flex-col">
	<div class="mb-4 flex flex-wrap items-center gap-2">
		<div class="flex items-center gap-2 rounded border border-gray-300 bg-white px-2 py-1 shadow-sm">
			<span class="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
				Month / Year
			</span>
			<select
				bind:value={selectedMonth}
				class="rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 outline-none"
				onchange={applySelectedMonthYear}
			>
				{#each monthOptions as month}
					<option value={month.value}>{month.label}</option>
				{/each}
			</select>
			<select
				bind:value={selectedYear}
				class="rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 outline-none"
				onchange={applySelectedMonthYear}
			>
				{#each yearOptions as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</div>

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
			onclick={() => moveMonth(-1)}
			type="button"
		>
			&lt;
		</button>
		<button
			aria-label="Next month"
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
			onclick={() => moveMonth(1)}
			type="button"
		>
			&gt;
		</button>

		<h2 class="ml-2 text-xl font-medium">{monthLabel}</h2>

		<div class="grow"></div>

		<button
			class="rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm font-medium hover:bg-gray-50"
			onclick={() => openCreateEvent(selectedDate)}
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
			<button
				type="button"
				class="border-r border-b border-gray-300 p-2 text-left text-sm last:border-r-0"
				class:bg-amber-50={!day.isCurrentMonth}
				class:bg-sky-100={day.isToday}
				onclick={() => {
					selectedDate = new Date(day.date);
					openCreateEvent(day.date);
				}}
			>
				<div class="text-right text-gray-700">{day.date.getDate()}</div>
				{#if day.events.length > 0}
					<div class="mt-2 space-y-1">
						{#each day.events.slice(0, 2) as event}
							<div class="truncate rounded bg-sky-100 px-1.5 py-0.5 text-[10px] text-sky-800">
								{event.title}
							</div>
						{/each}
						{#if day.events.length > 2}
							<div class="text-[10px] text-gray-500">+{day.events.length - 2} more</div>
						{/if}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

{#if isEventModalOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
		<div class="w-full max-w-2xl rounded-md border border-gray-300 bg-white shadow-2xl">
			<div class="flex items-center justify-between border-b border-gray-200 px-5 py-4">
				<h3 class="text-2xl font-semibold text-gray-800">Edit Calendar Event</h3>
				<button
					class="text-xl font-light text-gray-500 hover:text-gray-700"
					type="button"
					onclick={closeCreateEvent}
				>
					×
				</button>
			</div>

			<div class="space-y-4 p-5">
				<label class="block">
					<span class="mb-1 block text-sm font-medium text-gray-700">Title</span>
					<input
						bind:value={eventForm.title}
						class="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-base outline-none focus:border-teal-500"
						placeholder="Event title"
						type="text"
					/>
				</label>

				<div class="flex items-center gap-3">
					<span class="text-sm font-medium text-gray-700">Project</span>
					<div class="flex items-center gap-2 rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700">
						<span class="inline-block h-3 w-3 rounded-full bg-gray-400"></span>
						<span>{eventForm.project}</span>
					</div>
				</div>

				<label class="flex items-center gap-2 text-sm text-gray-700">
					<input bind:checked={eventForm.allDay} type="checkbox" />
					<span>All Day?</span>
				</label>

				<div class="grid gap-3 sm:grid-cols-2">
					<label class="block">
						<span class="mb-1 block text-sm font-medium text-gray-700">From</span>
						<div class="flex gap-2">
							<input
								bind:value={eventForm.fromDate}
								class="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 outline-none focus:border-teal-500"
								type="date"
							/>
							{#if !eventForm.allDay}
								<input
									bind:value={eventForm.fromTime}
									class="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 outline-none focus:border-teal-500"
									type="time"
								/>
							{/if}
						</div>
					</label>

					<label class="block">
						<span class="mb-1 block text-sm font-medium text-gray-700">To</span>
						<div class="flex gap-2">
							<input
								bind:value={eventForm.toDate}
								class="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 outline-none focus:border-teal-500"
								type="date"
							/>
							{#if !eventForm.allDay}
								<input
									bind:value={eventForm.toTime}
									class="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 outline-none focus:border-teal-500"
									type="time"
								/>
							{/if}
						</div>
					</label>
				</div>

				<label class="block">
					<span class="mb-1 block text-sm font-medium text-gray-700">Location</span>
					<input
						bind:value={eventForm.location}
						class="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 outline-none focus:border-teal-500"
						type="text"
					/>
				</label>

				<label class="block">
					<span class="mb-1 block text-sm font-medium text-gray-700">Notes</span>
					<textarea
						bind:value={eventForm.notes}
						class="min-h-24 w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 outline-none focus:border-teal-500"
					></textarea>
				</label>

				<label class="flex items-center gap-2 text-sm text-gray-700">
					<input bind:checked={eventForm.addTimeTracking} type="checkbox" />
					<span>Add time-tracking details</span>
				</label>

				<div class="rounded-md border border-gray-200 bg-gray-50 p-3">
					<div class="mb-2 text-sm font-medium text-gray-700">Event Attendees</div>
					<input
						bind:value={eventForm.attendees}
						class="w-full rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-teal-500"
						placeholder="Project member name or @username"
						type="text"
					/>
				</div>
			</div>

			<div class="flex justify-end gap-3 border-t border-gray-200 px-5 py-4">
				<button
					class="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
					type="button"
					onclick={closeCreateEvent}
				>
					Cancel
				</button>
				<button
					class="rounded bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
					type="button"
					onclick={saveEvent}
				>
					Save
				</button>
			</div>
		</div>
	</div>
{/if}
