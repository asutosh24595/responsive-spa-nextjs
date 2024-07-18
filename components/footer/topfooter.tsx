import { Button } from "@/components/ui/button";

export default function TopFooter() {
  return (
    <div className="w-full h-auto bg-hero-primary lg:px-40 py-10 flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center w-3/4 gap-y-6">
        <h1 className="lg:text-6xl text-3xl font-bold text-center text-gray-700">
          Pallentesque suscipit fringilla libero eu.
        </h1>
        <Button className="h-12 p-6">Get a Demo <span className="ml-4">&rarr;</span></Button>
      </div>
    </div>
  );
}
