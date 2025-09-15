import { ThemeLogo } from "../components/ThemeLogo";

export const metadata = {
  title: "日記",
};

type Props = {
  children: React.ReactNode;
};

export default function NikkiLayout({ children }: Props) {
  return (
    <>
      {children}
      <ThemeLogo
        lightSrc="/nikki_logo-light.svg"
        darkSrc="/nikki_logo-dark.svg"
        alt="日記ロゴ"
        width={667}
        height={154}
        className="absolute bottom-[80px] left-[42px] w-[46.3vw]"
      />
    </>
  );
}
