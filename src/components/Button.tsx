
type ButtonVariant = '3D' | 'Hover'

interface ButtonProps {
    label: string; // text displayed inside the button
    label2?: string; // text if hover style is selected
    variant?: ButtonVariant; // the button style
    onClick?: () => void; // optional click event handler
    className?: string; // additional custom class name for the button
}

export default function Button({label, label2, variant, onClick, className}: ButtonProps) : JSX.Element {
    switch (variant) {
        case '3D':
            return (
                <button
                    onClick={onClick}
                    className={`group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r dark:from-primary-100 dark:to-primary-200 from-accent-50 to-accent-100 dark:border-[rgb(47_106_49)] border-2 border-secondary-800 bg-transparent px-6 font-medium dark:text-white text-text-900 transition-all duration-100 dark:[box-shadow:5px_5px_rgb(47_106_49)] [box-shadow:5px_5px_rgb(62_142_65)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(62_142_65)] dark:active:[box-shadow:0px_0px_rgb(47_106_49)] ${className}`}
                >
                    {label}
                </button>
            );

        case 'Hover':
            return (
                <button
                    onClick={onClick}
                    className={`group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border-2 dark:border-secondary-700  border-secondary-800 font-medium bg-secondary-800 ${className}`}
                >
                    <div className='inline-flex h-12 translate-y-0 items-center text-white justify-center px-6 bg-gradient-to-r dark:from-secondary-700 dark:to-secondary-800 dark:text-white text-text-800 transition duration-500 group-hover:-translate-y-[150%]'>
                        {label}
                    </div>
                    <div className='absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0'>
                        <span className='absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-secondary-800 dark:bg-secondary-700 transition duration-500 group-hover:translate-y-0 group-hover:scale-150'></span>
                        <span className='z-10'>{label2}</span>
                    </div>
                </button>
            );

        default:
            return (
                <button
                    onClick={onClick}
                    className={`px-6 py-2 rounded-md bg-gray-300 text-black ${className}`}
                >
                    {label}
                </button>
            );
    }
}
