import ThemeToggle from "@/theme/theme-toggle";
import HeroPicture from "../HeroPicture";

export default function Header() {
  return (
    <div className="col-span-12 flex justify-between items-start">
      <HeroPicture />
      <ThemeToggle />
    </div>
  );
}
