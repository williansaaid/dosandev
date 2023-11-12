"use client"
import { motion } from 'framer-motion';

interface Props {
    title: string;
    text?: string;
    titleStyle?: string;
    textStyle?: string;
    styleComponent?: string;
    fromLeft?: boolean;
};

const TitleAndText = ({
    title,
    text,
    titleStyle,
    textStyle,
    styleComponent,
    fromLeft=false
}: Props) => {
    return (
        <motion.div
            className={`flex flex-col items-center justify-center ${styleComponent}`}
            initial={{ x: fromLeft ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease:"easeInOut" }}
            viewport={{ once: true }}
        >
            <h3
                className={`font-bold ${titleStyle}`}
            >
                {title}
            </h3>
            {
                text &&
                <p
                    className={`${textStyle}`}
                >
                    {text}
                </p>
            }
        </motion.div>
    )
}

export default TitleAndText;