import { pgTable, date, serial, text } from 'drizzle-orm/pg-core';

/** @typedef {typeof project.$inferSelect} Project */
export const project = pgTable('project', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	client: text('client').default('').notNull(),
	team: text('team').default('').notNull(),
	typeId: serial('type_id').references(() => projectType.id),
	phaseId: serial('phase_id').references(() => projectPhase.id),
	tags: text('tags').default('').notNull(),
	primary: text('primary').default('').notNull(),
	lastActivity: date('last_activity').defaultNow().notNull(),
	dateCreated: date('date_created').defaultNow().notNull()
});

/** @typedef {typeof projectPhase.$inferSelect} ProjectPhase */
export const projectPhase = pgTable('project_phase', {
	id: serial('id').primaryKey(),
	name: text('name').notNull()
});

/** @typedef {typeof projectType.$inferSelect} ProjectType */
export const projectType = pgTable('project_type', {
	id: serial('id').primaryKey(),
	name: text('name').notNull()
});
