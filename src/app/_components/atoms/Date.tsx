import { formatDate } from "@/app/_libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <>
      <span className="text-xs text-text leading-[1]">{formatDate(date)}</span>
    </>
  );
}
