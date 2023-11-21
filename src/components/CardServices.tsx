import AnimatedDiv from './AnimatedDiv'
import Image from 'next/image'

interface Props {
    title: string;
    image: string;
    text: string;
    imageAlt: string;
}

const CardServices = ({
    title,
    image,
    imageAlt,
    text
}: Props) => {
    return (
        <AnimatedDiv
            delay={0.5}
            x={-100}
        >
            <div
                className="bg-white text-black p-7 flex flex-col items-center justify-center shadow-md rounded-3xl gap-4 hover:shadow-yellowShadow duration-300"
            >
                <div
                    className='flex items-center justify-center w-20 h-20 object-cover relative'
                >
                    <Image
                        src={image} alt={imageAlt}
                        fill
                        className='w-full h-full object-cover'
                        priority draggable={false}
                    />
                </div>
                <h3 className="text-xl text-center font-bold capitalize">
                    {title}
                </h3>
                <span className="bg-yellow w-full h-1 rounded-xl"/>
                <p
                    className='text-center'
                >
                    {text}
                </p>
            </div>
        </AnimatedDiv>
    )
}

export default CardServices