import AnimatedDiv from "./AnimatedDiv";

interface Props {
    title: string;
    text: string;
    colorSphere: 'yellow' | 'gray' | 'dark';
    stylesComponent?: string;
    delay: number;
    x?: number;
    y?: number;
};

const Card = ({
    title,
    text,
    colorSphere = 'yellow',
    stylesComponent,
    delay,
    x,
    y,
}: Props) => {
    return (
        <AnimatedDiv
            delay={delay}
            x={x}
            y={y}
            className={`flex flex-col items-center justify-center text-dark text-center px-4 py-6 gap-4 rounded-xl bg-white shadow-xl min-w-[220px] h-96 xs:min-w-[300px] xs:h-80 sm:min-w-[450px] sm:h-64 md:min-w-[550px] md:h-56 lg:min-w-[25%] lg:w-3/12 lg:min-h-[384px] xl:min-h-[275px] xl:w-4/12 snap-center cursor-pointer ${stylesComponent}`}
        >
            <div className={`w-12 h-12 shadow-xl rounded-full bg-${colorSphere}`}/>
            <div
                className='flex flex-col justify-center items-center gap-2'
            >
                <h6 className="text-xl font-semibold">
                    {title}
                </h6>
                <p className="">
                    {text}
                </p>
            </div>
        </AnimatedDiv>
    )
}

export default Card