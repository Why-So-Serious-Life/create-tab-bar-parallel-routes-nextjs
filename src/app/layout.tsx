'use client';

// Import global from third party libraries.

// Import custom utility classes.

// Import custom types.

// Import custom components.
import { ReactNode } from 'react';

// Import styles.
import './styles/global.scss';

/**
 * This function defines the root layout component for the web app.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default function Layout({ tabs }: { tabs: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div>{tabs}</div>
            </body>
        </html>
    );
}
