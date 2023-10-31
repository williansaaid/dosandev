import Link from 'next/link';

interface Props {
    href: string
    text: string
    className?: string
    download?: boolean
    children?: React.JSX.Element
}

const Button = ({
    href,
    className,
    download=false,
    text,
    children
    }: Props ) => {
    return (
        <Link
            href={href}
            className={`flex items-center text-center justify-center border-2 py-2 px-4 rounded-xl text-lg font-semibold ${className}`}
            download={download}
        >
            <p>{ text }</p>
            {children && <div className="w-6 h-auto ml-1">
                { children }
            </div>}
        </Link>
    )
};

export default Button;