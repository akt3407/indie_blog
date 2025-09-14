import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="absolute flex items-end gap-[16.1vw] col-start-2 col-end-9 top-[33.3vh] -mt-[2.56vh]">
        <div className="w-[44.8vw] aspect-video">
          <Image
            src="/sample_img.jpg"
            alt="mv"
            width={645}
            height={362}
            loading="eager"
          />
        </div>
        <div className="w-[17.2vw]">
          <p className="text-primary text-lg leading-[1.1] font-medium">
            Dropping by...
            <br />
            Every now and then.
          </p>
          <p className="text-primary text-sm ml-[1px] mt-[1.3vh] leading-[1.1]">
            Fonmani tamani shika Coshin shinai
            <br />
            kimagure nikki.
          </p>
          <p className="text-primary text-xs ml-[1px] mt-[3.08vh] leading-normal">
            0000 nikkies + 0000 techs + 0000 photos
          </p>
        </div>
      </div>
    </>
  );
}
