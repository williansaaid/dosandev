"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';

interface Props {
    href: string;
    title: string;
    toggle: () => void;
    className?: string;
    classNameText?: string;
}


const CustomMobileLink = ({
    href,
    title,
    className="",
    classNameText,
    toggle
}: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button className={`${className} relative group`}
            onClick={handleClick}
        >
            <p className={`${classNameText} ${pathname === href ? "text-yellow" : "text-white"}`}>
                {title}
            </p>
            <span
                className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-yellow ${pathname === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </button>
    )
}

export default CustomMobileLink;