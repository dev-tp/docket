/** @type {function(...string): string} */
export function clsx(...classNames) {
	return classNames.filter((className) => !!className).join(' ');
}
