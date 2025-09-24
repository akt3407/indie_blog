import ThemeLogo from "@/app/components/ThemeLogo";

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
