import Image from "next/image";
import { Button } from "./ui/button";


interface PixelItem {
    img: string;
    title: string;
    description: string;
    buttonText: string;
  }
  
  interface PixelProps {
    data: PixelItem;
  }

const  PixelGrade = ({data}:PixelProps) => {
    return(
        <div className="md:flex items-center md:px-20 px-4 py-14 gap-x-16">
            <Image src={data.img} alt="image-2" width={400} height={400} loading="lazy"/>
            <div className="md:w-1/2 flex flex-col items-start md:-mt-10 gap-y-4 ">
                <h1 className="lg:text-4xl text-2xl text-gray-600 font-semibold">{data.title}</h1>
                <p className="text-sm text-gray-500">{data.description}</p>
                <Button className="w-40 h-14 text-base mt-2">{data.buttonText}</Button>
            </div>
        </div>
    )
}

export default PixelGrade;