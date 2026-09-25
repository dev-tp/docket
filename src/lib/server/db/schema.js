import { pgTable, date, serial, text } from 'drizzle-orm/pg-core';

/** @typedef {typeof project.$inferSelect} Project */
export const project = pgTable('project', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	client: text('client').default('').notNull(),
	team: text('team').default('').notNull(),
	type: text('type').default('').notNull(),
	phase: text('phase').default('').notNull(),
	tags: text('tags').default('').notNull(),
	primary: text('primary').default('').notNull(),
	lastActivity: date('last_activity').defaultNow().notNull(),
	dateCreated: date('date_created').defaultNow().notNull()
});
