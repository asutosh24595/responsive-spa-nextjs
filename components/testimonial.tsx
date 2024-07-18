import Image from "next/image";
import image from "@/public/assets/Tesla.png";
import icon1 from "@/public/assets/Test-1.png";
import icon2 from "@/public/assets/icon-2-removebg.png";
import icon3 from "@/public/assets/icon-3-removebg.png";
import icon4 from "@/public/assets/icon-4-removebg.png";
import icon5 from "@/public/assets/icon-5-removebg.png";
import icon6 from "@/public/assets/icon-6-removebg.png";

export default function Testimonial() {
  return (
    <div className="w-full h-auto py-6 lg:px-10 px-4 bg-hero-primary/40">
      <div className="lg:flex items-center gap-x-10 lg:ml-10">
        <Image
          src={image}
          alt="tesla-icon"
          width={400}
          className="rounded-lg mb-10"
          loading="lazy"
        />
        <div className="flex flex-col lg:w-4/5 px-4 gap-y-3">
          <p className="text-gray-300 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Curabitur
            pretium tincidunt lacus. Nulla gravida orci a odio.
          </p>
          <h1 className="text-lg text-primary font-semibold">Tim Smith</h1>
          <p className="text-gray-300 md:text-base text-sm">
            British Dragon Boat Racing Association
          </p>
            <span className="xl:flex items-center mt-2 gap-x-6">
              <span className="flex items-center lg:gap-x-6">
              <Image src={icon1} alt="icon-1" width={60} />
              <Image src={icon2} alt="icon-2" width={60} />
              <Image src={icon3} alt="icon-3" width={60} />
              <Image src={icon4} alt="icon-4" width={60} />
              <Image src={icon5} alt="icon-5" width={60} />
              <Image src={icon6} alt="icon-6" width={60} />
              </span>
              <span>
                  <p className="text-primary font-bold text-xl hover:cursor-pointer">
                    Meet all customers <span className="ml-4">&rarr;</span>
                  </p>
              </span>
          </span>
        </div>
      </div>
    </div>
  );
}
