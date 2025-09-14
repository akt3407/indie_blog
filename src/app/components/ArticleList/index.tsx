import Link from "next/link";

// type Props = {
//   nikki: Nikki[];
// };

// export default function ArticleList({}: Props) {
//   if (nikki.length === 0) {
//     return <p>日記が投稿されていません。</p>;
//   }
//   return (
//     <ul className="">
//       {nikki.map((article) => (
//         <li key={article.id} className="">
//           <Link href={`nikki/${article.id}`} className="">
//             <div className="">
//               <dl className="">
//                 <dt className="">
//                   <Data date={article.publishedAt ?? article.createAt} />
//                   <Category category={article.category} />
//                 </dt>
//                 <dd className="">{article.title}</dd>
//               </dl>
//             </div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default function ArticleList() {
  return (
    <>
      <ul className="w-[41.7vw]">
        <li className="py-6 pl-16 pr-8 border-t-1 border-b-1 border-[var(--color-primary)]">
          <Link href="/" className="block">
            <dl>
              <dt className="flex justify-start items-center gap-4">
                <span className="text-base text-[var(--color-text-primary)] leading-[1.3]">
                  2025-00-00
                </span>
                <button className="text-xxs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light">
                  #勉強記録
                </button>
              </dt>
              <dd className="mt-[16px] text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem] truncate w-[35vw]">
                日記のタイトルが入ります。
              </dd>
            </dl>
          </Link>
        </li>
        <li className="py-6 pl-16 pr-8 border-b-1 border-[var(--color-primary)]">
          <Link href="/" className="block">
            <dl>
              <dt className="flex justify-start items-center gap-4">
                <span className="text-base text-[var(--color-text-primary)] leading-[1.3]">
                  2025-00-00
                </span>
                <p className="text-xxs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light">
                  #勉強記録
                </p>
              </dt>
              <dd className="mt-[16px] text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem] truncate w-[35vw]">
                日記のタイトルが入ります。
              </dd>
            </dl>
          </Link>
        </li>
        <li className="py-6 pl-16 pr-8 border-b-1 border-[var(--color-primary)]">
          <Link href="/" className="block">
            <dl>
              <dt className="flex justify-start items-center gap-4">
                <span className="text-base text-[var(--color-text-primary)] leading-[1.3]">
                  2025-00-00
                </span>
                <p className="text-xxs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light">
                  #勉強記録
                </p>
              </dt>
              <dd className="mt-[16px] text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem] truncate w-[35vw]">
                日記のタイトルが入ります。
              </dd>
            </dl>
          </Link>
        </li>
        <li className="py-6 pl-16 pr-8 border-b-1 border-[var(--color-primary)]">
          <Link href="/" className="block">
            <dl>
              <dt className="flex justify-start items-center gap-4">
                <span className="text-base text-[var(--color-text-primary)] leading-[1.3]">
                  2025-00-00
                </span>
                <p className="text-xxs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light">
                  #勉強記録
                </p>
              </dt>
              <dd className="mt-[16px] text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem] truncate w-[35vw]">
                日記のタイトルが入ります。
              </dd>
            </dl>
          </Link>
        </li>
        <li className="py-6 pl-16 pr-8 border-b-1 border-[var(--color-primary)]">
          <Link href="/" className="block">
            <dl>
              <dt className="flex justify-start items-center gap-4">
                <span className="text-base text-[var(--color-text-primary)] leading-[1.3]">
                  2025-00-00
                </span>
                <p className="text-xxs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light">
                  #勉強記録
                </p>
              </dt>
              <dd className="mt-[16px] text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem] truncate w-[35vw]">
                日記のタイトルが入ります。
              </dd>
            </dl>
          </Link>
        </li>
        <li className="py-6 pl-16 pr-8 border-b-1 border-[var(--color-primary)]">
          <Link href="/" className="block">
            <dl>
              <dt className="flex justify-start items-center gap-4">
                <span className="text-base text-[var(--color-text-primary)] leading-[1.3]">
                  2025-00-00
                </span>
                <p className="text-xxs text-white px-2 py-1 bg-[var(--color-primary)] font-quaternary rounded-xl leading-[0.9] font-light">
                  #勉強記録
                </p>
              </dt>
              <dd className="mt-[16px] text-lg text-[var(--color-text-primary)] font-secondary leading-[1.6] tracking-[0.2rem] truncate w-[35vw]">
                日記のタイトルが入ります。日記のタイトルが入ります。日記のタイトルが入ります。
              </dd>
            </dl>
          </Link>
        </li>
      </ul>
    </>
  );
}
