// Import global from third party libraries.

// Import custom utility classes.

// Import custom types.

// Import custom components.
// eslint-disable-next-line no-unused-vars
import TabView from './tab-view';

// Import styles.

/**
 * This interface defines the props for the {@link TabView} component.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default interface TabViewProps {
    tabs: {
        id: number;
        label: string;
    }[];
    rootLink: string;
}
