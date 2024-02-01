"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    text: string;
    className?: string;
    stylesWords?: string;
    fromTop?: boolean;
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const AnimatedText = ({
    text,
    className="",
    fromTop=false,
    stylesWords
}: Props) => {
    return (
        <div className='w-full mx-auto py-4 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1
                className={` w-full text-first font-bold capitalize ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            key={index}
                            className={`inline-block duration-500 cursor-default ${stylesWords}`}
                            variants={{
                                initial: {
                                    opacity: 0,
                                    y: fromTop ? -50 : 50
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                    }
                                }
                            }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText;