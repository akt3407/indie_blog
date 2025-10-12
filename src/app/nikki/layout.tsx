import ThemeLogo from "../_components/atoms/ThemeLogo";

export const metadata = {
  title: "nikki",
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
