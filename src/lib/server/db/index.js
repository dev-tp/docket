import { env } from '$env/dynamic/private';
import { getDbInstance } from './utils';

export const db = getDbInstance(env);
