import type { Category } from "@/app/_libs/microcms";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <>
      <span className="block text-xxs text-white px-2 py-1 bg-primary font-quaternary rounded-xl leading-[0.9] font-light tracking-[0.05rem]">
        {category.name}
      </span>
    </>
  );
}
