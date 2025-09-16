// type Props = {
//   data: Nikki;
// };

import Image from "next/image";
import Link from "next/link";

export default function Article() {
  return (
    <main>
      <div className="flex justify-center items-start gap-[7.8vw]">
        <dl className="w-[36.3vw]">
          <dt className="flex justify-start items-center gap-4">
            <span className="text-base text-[var(--color-text-primary)] leading-[1]">
              2025-00-00
            </span>
            <Link href="/">
              <span className="text-xs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light tracking-[0.005rem]">
                #勉強記録
              </span>
            </Link>
          </dt>
          <dd className="mt-4 text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem]">
            日記のタイトルが入ります。
          </dd>
        </dl>
        <div className="w-[40vw] max-h-[75vh] overflow-y-auto">
          <div className="aspect-video">
            <Image
              src="/sample_img.jpg"
              alt="ブログのサムネイル"
              width={579}
              height={325}
              loading="lazy"
            />
          </div>
          <h2 className="mt-4 text-lg font-quaternary text-[var(--color-text-primary)] leading-[1.7] tracking-[0.3rem] font-medium">
            中見出し
          </h2>
          <p className="mt-4 text-sm font-quaternary text-[var(--color-text-primary)] leading-[1.7] tracking-[0.3rem] font-light [font-feature-settings:'palt'_1,'pwid'_1]">
            本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。
          </p>
        </div>
      </div>
    </main>
  );
}
