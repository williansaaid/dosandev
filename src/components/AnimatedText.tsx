"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    text: string
    className?: string
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
}
const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const AnimatedText = ({text, className=""}: Props) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
            <motion.h1
                className={`inline-block w-full text-first font-bold capitalize ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            key={index}
                            className="inline-block hover:text-yellow duration-500 cursor-default"
                            variants={singleWord}
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