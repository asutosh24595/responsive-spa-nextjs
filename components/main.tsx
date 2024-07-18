import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";
import heroImg1 from "@/public/assets/hero.png";
import heroImg2 from "@/public/assets/hero-2.png";
import heroImg3 from "@/public/assets/hero-3.png";

export default function Main() {
  return (
    <main className="w-full h-auto p-4 md:mt-16 ">
      <Carousel className="px-3">
        <CarouselContent>
          <CarouselItem>
            <div className="md:flex items-start justify-between">
                <div className="flex flex-col items-start gap-y-2">
                    <h1 className="lg:text-6xl text-3xl lg:mt-28 mt-4 text-gray-600 font-bold">Lessons and insights</h1>
                    <h1 className="text-primary lg:text-6xl text-3xl font-semibold">from 8 years</h1>
                    <p className="mt-2 text-gray-400 lg:text-base text-sm">Where to grow your business as a photographer: site or social media?</p>
                    <Button className="mt-4 lg:w-32 lg:h-14 w-20 h-10 text-base bg-primary">Register</Button>
                </div>
                <Image src={heroImg1} alt="hero" width={450} height={450} loading="lazy"/>
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="md:flex items-start justify-between">
                <div className="flex flex-col items-start gap-y-2">
                    <h1 className="lg:text-6xl text-3xl lg:mt-28 mt-4 text-gray-600 font-bold">Maximizing Your Online Presence</h1>
                    <h1 className="text-primary lg:text-6xl text-3xl font-semibold">from 8 years</h1>
                    <p className="mt-2 text-gray-400 lg:text-base text-sm">Balancing Website and Social Media for Photography Business Growth</p>
                    <Button className="mt-4 lg:w-32 lg:h-14 w-20 h-10 text-base bg-primary">Register</Button>
                </div>
                <Image src={heroImg2} alt="hero2" width={450} height={450} loading="lazy"/>
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="md:flex items-start justify-between">
                <div className="flex flex-col items-start gap-y-2">
                    <h1 className="lg:text-6xl text-3xl lg:mt-28 mt-4 text-gray-600 font-bold">Building a Strong Brand</h1>
                    <h1 className="text-primary lg:text-6xl text-3xl font-semibold">from 8 years</h1>
                    <p className="mt-2 text-gray-400 lg:text-base text-sm">Choosing Between a Photography Website and Social Media Platforms</p>
                    <Button className="mt-4 lg:w-32 lg:h-14 w-20 h-10 text-base bg-primary">Register</Button>
                </div>
                <Image src={heroImg3} alt="hero3" width={450} height={450} loading="lazy"/>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="text-primary"/>
      </Carousel>
    </main>
  );
}
