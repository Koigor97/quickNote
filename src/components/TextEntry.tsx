import {ReactElement, forwardRef} from 'react'
import PropTypes from 'prop-types'
import {cn} from "../../lib/utils.ts";
import {TextareaProps, TextEntryProps} from "../types/ITextEntry.ts";

/**
 * TextEntry is a reusable input component with flexible styling and forwarding refs.
 *
 * @param {string} [type] - The input type (e.g., text, password).
 * @param {string} [className] - Additional custom styles for the input element.
 * @param {string} [label] - Optional label text for the input.
 * @returns {ReactElement} A styled input component.
 */
export const NoteTitle = forwardRef<HTMLInputElement, TextEntryProps>(({type = 'text', className, label, disabled = false, onChange, ...props}, ref)  : ReactElement => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value); // Extract the value and pass it to the custom onChange
        }
    };

    return (
        <div>
            <label className="font-semibold text-text-700">{label}:</label>
            <input
                type={type}
                className={cn("flex h-9 w-full rounded-md border border-input bg-accent-50 px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-text-800 placeholder:italic placeholder-text-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm\",", className)}
                ref={ref}
                disabled={disabled}
                onChange={handleChange}
                {...props}
            />
        </div>
    )
    }
)

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, disabled = false, onChange, label, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (onChange) {
                onChange(e.target.value); // Pass only the value to the parent
            }
        };

        return (
            <div>
                <label className="font-semibold text-text-700">{label}:</label>
                <textarea
                    className={cn(
                        'flex min-h-[60px] w-full rounded-md border border-input bg-accent-50 px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        className,
                        disabled ? 'opacity-50 cursor-not-allowed' : ''
                    )}
                    disabled={disabled}
                    onChange={handleChange} // Transform event to value
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);


NoteTitle.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
}
