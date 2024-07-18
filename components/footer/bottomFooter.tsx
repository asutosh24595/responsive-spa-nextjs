import { footerData } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logoDark from "@/public/assets/logo-dark.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { SportsBasketball } from "@mui/icons-material";
import Link from "next/link";

interface FooterItems {
  id: number;
  title: string;
  list: string[];
}

export default function BottomFooter() {
  return (
    <div className="p-6 bg-gray-800 text-white w-full h-auto">
      <div className="xl:flex items-start my-10 xl:mx-20">
        <div className="flex flex-col items-start gap-y-6 w-1/3 mr-48 mb-10">
          <div className="flex items-center">
            <Image src={logoDark} alt="logo" width={45} />
            <Link href="#home"><h1 className="text-3xl text-white font-semibold">Nexcent</h1></Link>
          </div>
          <div className="flex flex-col text-sm gap-y-2">
            <p>Copyright &#169; 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <span className="flex items-center gap-x-4">
            <span className="rounded-full bg-slate-700 hover:cursor-pointer w-8 h-8 flex items-center justify-center">
              <InstagramIcon sx={{ width: "20px" }} />
            </span>
            <span className="rounded-full bg-slate-700 hover:cursor-pointer w-8 h-8 flex items-center justify-center">
              <SportsBasketball sx={{ width: "20px" }} />
            </span>
            <span className="rounded-full bg-slate-700 hover:cursor-pointer w-8 h-8 flex items-center justify-center">
              <XIcon sx={{ width: "20px" }} />
            </span>
            <span className="rounded-full bg-slate-700 hover:cursor-pointer w-8 h-8 flex items-center justify-center">
              <YouTubeIcon sx={{ width: "20px" }} />
            </span>
          </span>
        </div>
        <div className="sm:flex items-start lg:w-3/4 w-full gap-x-20">
          {footerData.map((data) => (
            <div key={data.id} className="flex flex-col gap-y-6">
              <h1 className="font-semibold text-lg">{data.title}</h1>
              <div className="flex flex-col gap-y-2 text-gray-200 mb-10">
                {data.list.map((item, index) => (
                  <p key={index} className="text-sm hover:cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-semibold">Stay up to date</h1>
            <div className="relative flex items-center">
              <span className="absolute right-3">
                <a href="mailto:someone@example.com">
                  <img
                    src="/assets/message.png"
                    alt="email"
                    width={16}
                    height={16}
                  />
                </a>
              </span>
              <Input placeholder="Your email address"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
