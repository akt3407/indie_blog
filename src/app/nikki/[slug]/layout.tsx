import ThemeLogo from "@/app/_components/atoms/ThemeLogo";

export const metadata = {
  title: "nikki[slug]",
};

type Props = {
  children: React.ReactNode;
};

export default function NikkiSlugLayout({ children }: Props) {
  return (
    <>
      {children}
      <ThemeLogo />
    </>
  );
}
