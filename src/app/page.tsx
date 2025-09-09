import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="col-start-2 col-end-8">
        <Image
          src="/home_img.jpg"
          alt=""
          width={645}
          height={362}
          loading="eager"
        />
      </div>
    </>
  );
}
