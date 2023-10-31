import React, { useRef } from 'react'
import CustomLink from './CustomLink';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

interface Props {
    title: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: any;
}

const DropdownMenu = ({title, open, setOpen, data}: Props) => {

    const dropdownRef = useRef(null);
    const mainRef = useRef(null);

    if(typeof window !== 'undefined'){
        window.addEventListener("click", (e) => {
            if(e.target !== dropdownRef.current && e.target !== mainRef.current){
                setOpen(false)
            }
        })
    }

    return (
        <div className='hover:cursor-pointer text-white'>
            <div
                className='flex justify-center items-center gap-2 relative group'
            >
                <p
                    onClick={() => setOpen(!open)}
                    ref={mainRef}
                >
                    {title}
                </p>
                <RiArrowDownDoubleLine
                    className={`${open && '-rotate-180'} ease duration-300`}
                />
                <span
                    className='h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0'
                >
                    &nbsp;
                </span>
            </div>
            {open &&
                <div
                    className='absolute flex flex-col bg-gray py-8 px-6 rounded-md top-20 shadow-xl gap-4 text-lg border-t-2 border-r-2 border-solid border-white/20'
                    ref={dropdownRef}
                    onClick={() => setOpen(false)}
                >
                    {data.map((item: any, key: number) => (
                        <CustomLink
                            href={item.href}
                            title={item.title}
                            key={key} underline
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default DropdownMenu;