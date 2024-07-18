import Image from "next/image";
import icon1 from "@/public/assets/icon-1-removebg.png";
import icon2 from "@/public/assets/icon-2-removebg.png";
import icon3 from "@/public/assets/icon-3-removebg.png";
import icon4 from "@/public/assets/icon-4-removebg.png";
import icon5 from "@/public/assets/icon-5-removebg.png";
import icon6 from "@/public/assets/icon-6-removebg.png";
import { serviceData } from "@/lib/actions";
import ServiceCard from "@/components/service/service-card";

export default function Service() {
  return (
    <div className="w-full h-auto p-6">
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex items-center flex-col justify-center gap-y-3 my-2">
          <h1 className="text-4xl font-semibold text-gray-600">Our Clients</h1>
          <p className="text-gray-500 text-center">We have been working with some Fortune 500+ clients</p>
        </div>
        <span className="flex items-center justify-between w-full p-4 my-2">
          <Image src={icon1} alt="icon-1" width={40} height={10}></Image>
          <Image src={icon2} alt="icon-2" width={50} height={10}></Image>
          <Image src={icon3} alt="icon-3" width={60} height={10}></Image>
          <Image src={icon4} alt="icon-4" width={60} height={10}></Image>
          <Image src={icon5} alt="icon-5" width={50} height={10}></Image>
          <Image src={icon6} alt="icon-7" width={50} height={10}></Image>
          <Image src={icon3} alt="icon-6" width={60} height={10}></Image>
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-4 mt-12">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold text-gray-600 text-center">Manage your entire community</h1>
          <h1 className="text-4xl font-semibold text-gray-600">in a single system</h1>
          <p className="text-gray-500 mt-4">Who is Nexcent suitable for?</p>
        </div>
        <div className="lg:flex items-center justify-between w-full p-4">
          {serviceData.map(data => <ServiceCard key={data.id} item={data}/>)}
        </div>
      </div>
    </div>
  );
}
