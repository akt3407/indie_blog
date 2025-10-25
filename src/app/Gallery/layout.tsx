export const metadata = {
  title: "GALLERY",
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
