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
