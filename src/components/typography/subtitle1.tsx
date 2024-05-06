// Import custom types.
import TextProps from './text-props';

// Import styles.
import styles from './styles.module.scss';

/**
 * This function is used as the {@link Subtitle1} component.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
function Subtitle(props: TextProps) {
    return (
        <p
            className={`text-subtitle ${styles.textSubtitle1} ${props.className}`}
            style={{ width: `${props.width}`, color: `${props.textColor}` }}
        >
            {props.children}
        </p>
    );
}

export default Subtitle;
