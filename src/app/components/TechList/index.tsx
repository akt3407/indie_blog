import Image from "next/image";
import Link from "next/link";

export default function TechList() {
  return (
    <main>
      <div className="flex justify-center items-start gap-[5.7vw]">
        <div className="w-[28.7vw]">
          <h2 className="text-xxl text-[var(--color-text-primary)] font-tertiary leading-none tracking-[0.07rem]">
            Sample
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-primary)] font-quaternary leading-[1.5] tracking-[0.07rem] font-light">
            説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります
          </p>
          <Link
            href="/"
            className="block mt-8 text-base text-primary font-tertiary leading-[1.5] tracking-[0.07rem]"
          >
            View Demo
          </Link>
        </div>
        <div className="w-[46vw] max-h-[75vh] overflow-y-auto">
          <div className="aspect-video">
            <Image
              src="/sample_img.jpg"
              alt=""
              width={663}
              height={373}
              loading="lazy"
            />
          </div>
          <div className="aspect-video mt-20">
            <Image
              src="/sample_img.jpg"
              alt=""
              width={663}
              height={373}
              loading="lazy"
            />
          </div>
          <div className="aspect-video mt-20">
            <Image
              src="/sample_img.jpg"
              alt=""
              width={663}
              height={373}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
