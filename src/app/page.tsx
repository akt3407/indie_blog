import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="col-start-2 col-end-9 row-start-5 row-end-12 -mt-[20px]">
        <Image
          src="/home_img.jpg"
          alt="mv"
          width={645}
          height={362}
          loading="eager"
        />
      </div>
    </>
  );
}
