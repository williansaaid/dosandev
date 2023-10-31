import React from 'react'

interface Props {
    isOpen: boolean;
    handleClick: () => void;
    className?: string;
}

const BurguerMenuButton = ({isOpen, handleClick, className}: Props) => {

    return (
        <div className='top-9 lg:hidden'>
            <button
                className='flex flex-col justify-center items-center'
                onClick={handleClick}
            >
                <span className={`bg-yellow block h-0.5 w-6 rounded-md duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"} ${className}`}></span>
                <span className={`bg-yellow/75 block h-0.5 w-6 rounded-md my-1 duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"} ${className}`}></span>
                <span className={`block h-0.5 w-6 rounded-md duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5 bg-yellow" : "translate-y-0.5 bg-yellow/50"} ${className}`}></span>
            </button>
        </div>
    )
}

export default BurguerMenuButton;