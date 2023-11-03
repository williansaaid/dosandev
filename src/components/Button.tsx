import Link from 'next/link';

interface Props {
    href: string;
    text: string;
    className?: string;
    download?: boolean;
    children?: React.JSX.Element;
    textStyle?: string;
}

const Button = ({
    href,
    className,
    download=false,
    text,
    children,
    textStyle
    }: Props ) => {
    return (
        <Link
            href={href}
            className={`flex items-center text-center justify-center py-2 px-4 rounded-xl font-semibold ${className}`}
            download={download}
            target='_BLANK'
        >
            <p
                className={textStyle}
            >
                { text }
            </p>
            {children && <div className="w-6 h-auto ml-1">
                { children }
            </div>}
        </Link>
    )
};

export default Button;