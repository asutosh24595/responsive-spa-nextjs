import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Service from "@/components/service/service";
import PixelGrade from "@/components/pixelgrade";
import { pixelGradeData } from "@/lib/actions";
import CountMenu from "@/components/countStats/countMenu";
import Testimonial from "@/components/testimonial";
import ReadMore from "@/components/faq/readMore";
import TopFooter from "@/components/footer/topfooter";
import BottomFooter from "@/components/footer/bottomFooter";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
      <div
        className="w-full min-h-full flex flex-col items-center justify-between p-6 bg-hero-primary/40"
      >
        <Navbar />
        <Main />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="pixel-grade-1">
        <PixelGrade data={pixelGradeData[0]} />
      </div>
      <div id="count-menu">
        <CountMenu />
      </div>
      <div id="pixel-grade-2">
        <PixelGrade data={pixelGradeData[1]} />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="read-more">
        <ReadMore />
      </div>
      <TopFooter />
      <BottomFooter />
    </div>
  );
}
