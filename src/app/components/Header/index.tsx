import ThemeToggle from "@/theme/theme-toggle";
import HeroPicture from "../HeroPicture";

export default function Header() {
  return (
    <div className="col-start-1 col-end-13 flex justify-between items-start">
      <HeroPicture />
      <ThemeToggle />
    </div>
  );
}
