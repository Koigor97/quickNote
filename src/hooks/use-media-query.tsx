import { useEffect, useState } from "react";


/**
 * Custom React hook to evaluate and track the state of a CSS media query.
 *
 * This hook listens for changes in the viewport and updates the state
 * whenever the media query condition is met or unmet. Useful for
 * implementing responsive design logic directly in components.
 *
 * @param {string} query - A valid CSS media query string (e.g., `"(min-width: 768px)"`).
 *
 * @returns {boolean} - Returns `true` if the media query matches the current viewport, otherwise `false`.
 *
 * @example
 * // Example: Conditionally render a component based on viewport width
 * function Navbar() {
 *   const isDesktop = useMediaQuery('(min-width: 1024px)');
 *
 *   return (
 *     <nav>
 *       {isDesktop ? <DesktopMenu /> : <MobileMenu />}
 *     </nav>
 *   );
 * }
 *
 * @example
 * // Example: Apply styles based on viewport size
 * const isSmallScreen = useMediaQuery('(max-width: 600px)');
 * const buttonClass = isSmallScreen ? 'btn-small' : 'btn-large';
 */
export function useMediaQuery(query: string): boolean {
    const [value, setValue] = useState(false);

    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches);
        }

        const result = matchMedia(query);
        result.addEventListener('change', onChange);
        setValue(result.matches);

        // removes the event listener when the component unmounts or when the query changes to prevent memory leaks.
        return () => result.removeEventListener('change', onChange);
    }, [query]);

    return value;
}
