import Image from "next/image";
import Button from "../components/Button";
import { MdOutlinePageview } from 'react-icons/md';

interface CardProjectProps {
    img: string;
    titulo: string;
    descripcion: string;
    icons: React.ElementType[];
    iconColors: string[];
    iconNames: string[];
    linkWeb: string;
    altImg: string;
}
const CardProject: React.FC<CardProjectProps> = ({
    img,
    altImg,
    titulo,
    descripcion,
    icons,
    iconColors,
    iconNames,
    linkWeb
}) => {

    return (
        <>
            <div className="rounded-3xl bg-white max-h-min overflow-hidden pb-4 w-full md:w-2/5 max-w-64 hover:shadow-yellowShadow duration-300">
                <div
                    className='flex items-center justify-center w-full h-56 object-top relative'
                >
                    <Image
                        src={img}
                        alt={altImg}
                        fill
                        className='w-full h-full object-cover'
                        priority draggable={false}
                    />
                </div>
                <div className="px-6 py-4">
                    <div
                        className="font-bold text-xl mb-2 text-black"
                    >
                        {titulo}
                    </div>
                    <p
                        className="text-gray-700 text-base text-black"
                    >
                        {descripcion}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center px-6 pt-4 pb-2">
                    {icons.map((IconComponent, index) => (
                        <div key={index} className="text-center">
                            <IconComponent size={50}
                                className={`${iconColors[index]} mx-5`}
                            />
                            <div
                                className="text-black"
                            >
                                {iconNames[index]}
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" flex flex-row justify-center mx-2 mt-5 mb-3">
                    <Button
                        href={linkWeb}
                        icon={<MdOutlinePageview/>}
                        text="Visualizar"
                        className="text-black bg-yellow hover:bg-gray duration-300"
                    />
                </div>
            </div>
        </>
    )
}

export default CardProject;
