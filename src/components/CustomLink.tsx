"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    href: string;
    title: string;
    underline?: boolean;
    className?: string;
    classNameText?: string;
    onClick?: () => void;
}

const CustomLink = ({href, title, className="", classNameText="", underline=true, onClick}: Props) => {

    const pathname = usePathname();

    return (
        <Link href={href}
            className={`${className} relative group text-first`}
            onClick={onClick}
        >
            <p className={classNameText}>{title}</p>
            {
                underline &&
                <span
                    className={`h-[1px] inline-block bg-yellow absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 ${pathname === href ? "w-full" : "w-0"}`}
                >
                    &nbsp;
                </span>
            }
        </Link>
    )
}

export default CustomLink;