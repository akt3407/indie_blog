import Image from "next/image";

import "./globals.css";
import Menu from "./_components/Menu";
import Opening from "./_components/Opening";
import { getContentCount } from "./_libs/microcms";
import FixedText from "./_components/atoms/FixedText";

export default async function Home() {
  const nikkies = await getContentCount("blog");
  const pad = (num: number) => String(num).padStart(4, "0");

  return (
    <>
      <Opening />
      <div className="max-lg:flex max-lg:flex-col max-lg:gap-[5vw] max-lg:top-[20vh] max-lg:items-end flex col-start-2 col-span-10 justify-center items-end relative top-[26vh] gap-[14.9vw] self-start max-sm:ml-[-2vw]">
        <div className="max-lg:w-full w-[44.8vw] relative aspect-video">
          <Image
            src="/sample_img.jpg"
            alt="mv"
            width={645}
            height={362}
            loading="eager"
          />
        </div>
        <div className="max-lg:w-[35%] w-[17.2vw] relative max-sm:w-[63%] max-ssm:w-[61%]">
          <p className="text-primary text-base leading-[1.1] font-medium transition-colors duration-150 xl:text-md">
            Dropping by...
            <br />
            Every now and then.
          </p>
          <p className="text-primary text-xs ml-[1px] mt-[1.3vh] leading-[1.2] transition-colors duration-150">
            Fonmani tamani shika Coshin
            <br />
            shinai kimagure nikki.
          </p>
          <p className="text-primary text-xxs ml-[1px] mt-[2.5vh] leading-[0.715] transition-colors duration-150">
            {pad(nikkies)} nikkies + 0000 techs + 0000 photos
          </p>
        </div>
        <div className="grid grid-cols-12 gap-x-[3.5vw] fixed justify-between items-end w-[93vw] bottom-[7.8vh] left-[3.47vw] z-50 max-sm:bottom-[3.4vh]">
          <FixedText />
          <Menu />
        </div>
      </div>
    </>
  );
}
