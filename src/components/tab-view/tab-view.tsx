'use client';

// Import global from third party libraries.
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Import custom utility classes.

// Import custom types.
import TabViewProps from './tab-view-props';

// Import custom components.
import { Subtitle } from '../typography';

// Import styles.
// import surfaceColors from '../../app/styles/surface-color-variables.module.scss';
import styles from './styles.module.scss';

/**
 * This function defines the {@link TabView} component.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default function TabView(props: TabViewProps) {
    const [activeTab, setActiveTab] = useState(props.tabs[0].label);
    const router = useRouter();
    const pathname = usePathname();
    const pathnameArr = pathname.split('/');

    useEffect(() => {
        /**
         * Whenever a {@link TabView} is first called, redirect the root layout to first child appended to the pathname.
         */
        if (pathnameArr.at(-1) === props.rootLink) {
            router.push(`${pathname}/${props.tabs[0].label}`);
        }
        setActiveTab(pathnameArr.at(-1));
    }, []);

    /**
     * This function handles the click event on any Tab of a {@link TabView}.
     *
     * @param tabData An object containing information about the tab clicked.
     */
    const handleTabClick = (tabData: { id: number; label: string }) => {
        setActiveTab(tabData.label);
        router.push(
            pathnameArr
                .slice(0, pathnameArr.length - 1)
                .concat(tabData.label)
                .join('/')
        );
    };

    return (
        <nav className={styles.tabBar}>
            {props.tabs.map((tabData) => (
                <button
                    key={tabData.id}
                    className={
                        activeTab === tabData.label
                            ? styles.tab__active
                            : styles.tab__inactive
                    }
                    type="button"
                    onClick={() => handleTabClick(tabData)}
                >
                    <Subtitle
                        textColor={
                            activeTab === tabData.label ? '#141414' : '#505050'
                        }
                        width="100%"
                    >
                        {tabData.label}
                    </Subtitle>
                </button>
            ))}
        </nav>
    );
}
