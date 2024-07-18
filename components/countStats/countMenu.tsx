'use client';

import { countData } from "@/lib/actions";
import CountAnimation from "./countAnimation";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CountMenu() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {

    if (inView) {
      setShouldAnimate(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-auto p-16 bg-hero-primary">
      <div className="xl:flex items-center gap-x-60">
        <div className="flex flex-col gap-y-2 mb-20">
          <h1 className="text-3xl font-semibold text-gray-700">
            Helping a local
          </h1>
          <h1 className="text-3xl font-semibold text-primary">
            business reinvent itself
          </h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {countData.map((data, index) => (
            <div key={index} className="flex items-center gap-x-4 mb-4">
              <Image src={data.icon} alt={data.title} width={60} height={20} />
              <div className="flex flex-col items-start">
                <CountAnimation counts={shouldAnimate ? data.count : 0} />
                <h1 className="text-gray-500">{data.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
