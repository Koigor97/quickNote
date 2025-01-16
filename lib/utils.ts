import { type ClassValue, clsx} from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS class names using `clsx` and resolves conflicts with `tailwind-merge`.
 *
 * This function allows dynamic and conditional class name generation while resolving
 * conflicting Tailwind CSS utility classes.
 *
 * @param {...ClassValue[]} inputs - A list of class values that can be:
 *   - **string**: Direct class names (e.g., `"bg-blue-500"`).
 *   - **number**: Numeric values converted to strings (e.g., `42` → `"42"`).
 *   - **boolean**: Ignored; useful for conditionally applying classes.
 *   - **null | undefined**: Ignored.
 *   - **Array**: Nested arrays of class values (e.g., `["p-4", ["bg-red-500"]]`).
 *   - **Object**: Key-value pairs where keys are class names and values determine inclusion
 *     (e.g., `{ "hidden": isHidden, "block": !isHidden }`).
 *
 * @returns {string} A merged and optimized string of class names with Tailwind CSS conflicts resolved.
 *
 * @example
 * // Example with conditional class names
 * const buttonClass = cn(
 *   "px-4 py-2",
 *   isActive && "bg-blue-500",
 *   isDisabled ? "cursor-not-allowed" : "cursor-pointer",
 *   ["rounded", "shadow"],
 *   { "opacity-50": isDisabled }
 * );
 * // Result (if isActive is true and isDisabled is false):
 * // "px-4 py-2 bg-blue-500 cursor-pointer rounded shadow"
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(...inputs));
}


/**
 * Defines the available date format options.
 */
type DateFormatOption = 'full' | 'numeric' | 'year' | 'month' | 'day';

/**
 * Formats a given date into various formats based on the provided option.
 *
 * @param {Date | string} date - The date object or date string to be formatted.
 * @param {DateFormatOption} format - The desired format for the output:
 *   - `'full'`: Full date with month name (e.g., "January 15, 2025").
 *   - `'numeric'`: Numeric format (e.g., "01/15/2025").
 *   - `'year'`: Only the year (e.g., "2025").
 *   - `'month'`: Only the month name (e.g., "January").
 *   - `'day'`: Only the day of the month (e.g., "15").
 *
 * @returns {string} The formatted date string.
 *
 * @example
 * formatDate(new Date(), 'full');    // "January 15, 2025"
 * formatDate('2025-01-15', 'numeric'); // "01/15/2025"
 * formatDate(new Date(), 'year');    // "2025"
 * formatDate(new Date(), 'month');   // "January"
 * formatDate(new Date(), 'day');     // "15"
 */
export function formatDate(date: Date | string, format: DateFormatOption): string {
    const d = typeof date === 'string' ? new Date(date) : date;

    // Check for invalid dates
    if (isNaN(d.getTime())) {
        throw new Error('Invalid date provided.');
    }

    const options: Intl.DateTimeFormatOptions = {};

    switch (format) {
        case 'full':
            options.month = 'long';
            options.day = 'numeric';
            options.year = 'numeric';
            break;
        case 'numeric':
            // @ts-ignore
            return `${(d.getMonth() + 1).toString().padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
        case 'year':
            return d.getFullYear().toString();
        case 'month':
            options.month = 'long';
            break;
        case 'day':
            return d.getDate().toString();
        default:
            throw new Error('Invalid format option provided.');
    }

    return new Intl.DateTimeFormat('en-SA', options).format(d);
}
