import Image from "next/image";

interface ServiceItem {
  img: string;
  title1: string;
  title2: string;
  description: string;
}

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard = ({ item }: ServiceCardProps) => {
  return (
    <div className="border-b rounded-sm shadow flex flex-col items-center lg:w-1/4 p-4 mb-2">
      <Image src={item.img} alt={`${item.title1} image`} width={70} height={10} loading="lazy"/>
      <h1 className="text-3xl font-semibold text-gray-600">{item.title1}</h1>
      <h1 className="text-3xl font-semibold text-gray-600">{item.title2}</h1>
      <div className="w-[84%] my-3">
      <p className="text-sm text-gray-500 text-center">{item.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
