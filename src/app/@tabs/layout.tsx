'use client';

// Import global from third party libraries.
import { type ReactNode } from 'react';

// Import custom utility classes.

// Import custom types.

// Import custom components.
import TabView from '../../components/tab-view/tab-view';

// Import styles.

/**
 * This function defines the layout component for the Tab View.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default function TabLayout({ children }: { children: ReactNode }) {
    const tabsData = [
        {
            id: 0,
            label: 'flights'
        },
        {
            id: 1,
            label: 'trips'
        },
        {
            id: 2,
            label: 'explore'
        }
    ];

    return (
        <div>
            <TabView tabs={tabsData} rootLink="accounts" />
            {children}
        </div>
    );
}
