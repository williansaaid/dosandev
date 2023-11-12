import React from 'react';
import CustomMobileLink from './CustomMobileLink';
import { motion } from "framer-motion";
import { RiArrowDownDoubleLine } from 'react-icons/ri';

interface Props {
    title: string;
    showCategories: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    areShown: boolean;
    className?: string;
}


const DropdownMenuMobile = ({
    title,
    className="",
    showCategories,
    toggle,
    areShown=false
}: Props) => {

    const handleClick = () => {
        showCategories(!areShown);
    }

    return (
        <>
            <button className={`${className} flex items-center justify-center gap-4 relative group`}
                onClick={handleClick}
            >
                {title}
                <RiArrowDownDoubleLine
                    className={`${areShown && '-rotate-180'} ease duration-300`}
                />
                <span
                    className='h-[1px] inline-block bg-gray absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0'
                >
                    &nbsp;
                </span>
            </button>
            { areShown &&
                <motion.div
                    className='flex flex-col justify-center items-center gap-6 bg-gray/10 rounded-md w-full px-8 py-2'
                    onClick={handleClick}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1}}
                >
                    <CustomMobileLink
                        href='/'
                        title='Prueba'
                        toggle={toggle}
                    />
                </motion.div>
            }
        </>
    )
}

export default DropdownMenuMobile;