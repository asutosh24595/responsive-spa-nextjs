import Image from "next/image";

interface ReadMoreItem {
  id: number;
  img: string;
  title: string;
}

interface ReadMoreProps {
  items: ReadMoreItem;
}

export default function ReadMoreCard({ items }: ReadMoreProps) {
  return (
    <div className="xl:w-1/3 relative mx-2 xl:my-0 sm:mb-28 mb-32">
      <Image src={items.img} alt={items.title} width={400} height={0} className="rounded-xl" loading="lazy"/>
      <div className="absolute sm:-bottom-16 -bottom-24 left-10 border bg-slate-100 w-4/5 py-4 px-4 rounded-xl shadow-xl gap-y-4 flex flex-col">
        <h1 className="lg:text-xl sm:text-base text-sm text-center font-semibold text-gray-500">{items.title}</h1>
        <h1 className="text-primary text-center font-semibold text-lg hover:cursor-pointer">Readmore <span className="ml-4">&rarr;</span></h1>
      </div>
    </div>
  );
}
