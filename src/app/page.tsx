import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="col-start-2 col-span-4 w-[44.8vw] relative top-[26.4vh] aspect-video">
        <Image
          src="/sample_img.jpg"
          alt="mv"
          width={645}
          height={362}
          loading="eager"
        />
      </div>
      <div className="col-start-9 col-span-3 w-[17.2vw] ml-[3.33vw] relative top-[55.89vh] self-start">
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
    </>
  );
}
