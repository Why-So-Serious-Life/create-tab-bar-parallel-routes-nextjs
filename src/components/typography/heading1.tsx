// Import custom types.
import TextProps from './text-props';

// Import styles.
import styles from './styles.module.scss';

/**
 * This function is used as the {@link Heading1} component.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
function Heading1(props: TextProps) {
    return (
        <h1
            className={`text-heading-1 ${styles.textHeading1} ${props.className}`}
            style={{ width: `${props.width}`, color: `${props.textColor}` }}
        >
            {props.children}
        </h1>
    );
}

export default Heading1;
