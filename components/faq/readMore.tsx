import { readMoreData } from "@/lib/actions";
import ReadMoreCard from "./readMoreCard";

export default function ReadMore() {
  return (
    <div className="w-full h-auto p-6 mb-20">
      <div className="items-center justify-center flex flex-col gap-y-2 mb-6 mt-8">
        <h1 className="md:text-4xl text-xl font-semibold text-gray-600">Caring is the new marketing</h1>
        <p className="md:w-3/5 text-center text-gray-500 ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        </div>
        <div className="xl:flex items-center p-4">
            {readMoreData.map(data=><ReadMoreCard key={data.id} items={data}/>)}
        </div>
    </div>
  );
}
