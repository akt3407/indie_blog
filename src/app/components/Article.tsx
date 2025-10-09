import Image from "next/image";
import Link from "next/link";

export default function Article() {
  return (
    <>
      <dl className="col-start-2 col-span-2 relative ml-[-3.5vw] top-[8.97vh] w-[21.875vw] self-start">
        <dt className="flex justify-start items-center gap-4">
          <span className="text-base text-text leading-[1]">2025-00-00</span>
          <Link href="/">
            <span className="text-xs text-white px-2 py-1 bg-primary font-quaternary rounded-xl leading-[0.9] font-light tracking-[0.005rem]">
              #勉強記録
            </span>
          </Link>
        </dt>
        <dd className="mt-4 text-lg text-text font-secondary leading-[1.6] tracking-[0.1rem] whitespace-nowrap">
          日記のタイトルが入ります。
        </dd>
      </dl>
      <div className="col-start-5 col-span-6 relative w-[44.9vw] pt-[8.97vh] ml-[4.5vw] h-[100vh] overflow-y-auto scrollbar-none">
        <div className="h-[150vh]">
          <div className="aspect-video">
            <Image
              src="/sample_img.jpg"
              alt="ブログのサムネイル"
              width={579}
              height={325}
              loading="lazy"
            />
          </div>
          <h2 className="mt-4 text-lg font-quaternary text-text leading-[1.7] tracking-[0.3rem] font-medium">
            中見出し
          </h2>
          <p className="mt-4 text-sm font-tertiary text-text leading-[1.7] tracking-[0.3rem] font-light [font-feature-settings:'palt'_1,'pwid'_1]">
            本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。
          </p>
        </div>
      </div>
    </>
  );
}
