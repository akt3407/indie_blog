import ThemeLogo from "../components/ThemeLogo";

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
      <ThemeLogo />
    </>
  );
}
