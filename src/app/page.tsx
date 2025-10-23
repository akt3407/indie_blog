"use client";

import Image from "next/image";

import "./globals.css";
import { useState } from "react";
import Opening from "./_components/Opening";
import VersionText from "./_components/atoms/FixedText";
import Menu from "./_components/Menu";

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);

  return (
    <>
      {showOpening && <Opening />}
      <div className="col-start-2 col-span-10 flex justify-center items-end relative top-[26vh] gap-[14.9vw] self-start">
        <div className="w-[44.8vw] relative aspect-video">
          <Image
            src="/sample_img.jpg"
            alt="mv"
            width={645}
            height={362}
            loading="eager"
          />
        </div>
        <div className="w-[17.2vw] relative ">
          <p className="text-primary text-md leading-[1.1] font-medium transition-colors duration-150">
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
            0000 nikkies + 0000 techs + 0000 photos
          </p>
        </div>
        <div className="grid grid-cols-12 gap-x-[3.5vw] fixed justify-between items-end w-[93vw] bottom-[7.8vh] left-[3.47vw] z-50">
          <VersionText />
          <Menu />
        </div>
      </div>
    </>
  );
}
