import IconWrapper from 'components/icons/IconWrapper';
import { IIconProps, EIconSizes } from 'components/icons/types';

export default function SearchIcon({
    size = EIconSizes.small,
    className,
    wrapperClassName,
}: IIconProps): JSX.Element {
    const formattedSize =
        (typeof size === 'number' ? size : EIconSizes[size]) * 1.5;

    return (
        <IconWrapper size={formattedSize} className={wrapperClassName}>
            <svg
                enableBackground="new 0 0 32 32"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" />
            </svg>
        </IconWrapper>
    );
}
