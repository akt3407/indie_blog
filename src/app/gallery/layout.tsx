export const metadata = {
  title: "ギャラリー",
};

type Props = {
  children: React.ReactNode;
};

export default function GalleryLayout({ children }: Props) {
  return (
    <>
      {children}
      {/* <ThemeLogo /> */}
    </>
  );
}
