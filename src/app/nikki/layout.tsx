import ThemeLogo from "../components/ThemeLogo";

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
      <ThemeLogo />
    </>
  );
}
