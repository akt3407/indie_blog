import { ThemeLogo } from "../components/ThemeLogo";

export const metadata = {
  title: "開発日記",
};

type Props = {
  children: React.ReactNode;
};

export default function TechLayout({ children }: Props) {
  return (
    <>
      {children}
      <ThemeLogo
        lightSrc="/tech_logo-light.svg"
        darkSrc="/tech_logo-dark.svg"
        alt="開発ロゴ"
        width={601}
        height={154}
        className="absolute bottom-[80px] left-[42px] w-[41.7vw]"
      />
    </>
  );
}
