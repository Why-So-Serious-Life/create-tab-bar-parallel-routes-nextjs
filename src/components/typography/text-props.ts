/**
 * This defines the data type for text props.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-05-06
 * @modifier
 * @modified
 * @since 1.0.0
 */
interface TextProps {
    children: string | string[] | JSX.Element;
    className?: string;
    textColor?: string;
    margin?: string;
    onClick?: React.MouseEventHandler<HTMLParagraphElement>;
    width?: string;
}

export default TextProps;
