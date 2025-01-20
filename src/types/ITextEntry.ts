import {ComponentProps} from "react";
import {IDisable} from "./IDisable.ts";

/**
 * Props for the TextEntry component.
 *
 * @property {string} [type='text'] - The input type (e.g., text, password, email, etc.).
 * @property {string} [className] - Additional custom styles for the input element.
 * @property {string} [label] - Optional label text for the input element.
 * @property {boolean} [disabled=false] - Disables the input field if set to true.
 * @property {(value: string) => void} [onChange] - Callback function to capture the input's value when it changes.
 * @property {React.InputHTMLAttributes<HTMLInputElement>} ...props - Inherited props from the native HTML input element.
 */
export interface TextEntryProps extends IDisable, Omit<ComponentProps<'input'>, 'onChange'>
{
    type: string;
    className?: string;
    label?: string;
    onChange?: (value: string) => void;
}

/**
 * Props for the Textarea component.
 *
 * @property {string} [className] - Additional custom styles for the textarea element.
 * @property {boolean} [disabled=false] - Disables the textarea if set to true.
 * @property {(value: string) => void} [onChange] - Callback function to capture the input's value when it changes.
 * @property {React.TextareaHTMLAttributes<HTMLTextAreaElement>} ...props - Inherited props from the native HTML textarea element.
 */
export interface TextareaProps
    extends IDisable, Omit<ComponentProps<'textarea'>, 'onChange'> {
    className?: string;
    label?: string;
    onChange?: (value: string) => void;
}
