import { menuItems } from "@/data/menuItem";
import { MenuItem } from "@/types/menu";
import Link from "next/link";

export default function Menu() {
  const renderMenuItem = (item: MenuItem) => (
    <li key={item.id} className="block">
      <Link
        href={item.href}
        className="text-[var(--color-primary)] text-base tracking-[0.05rem] leading-none"
      >
        {item.label}
      </Link>
    </li>
  );

  return (
    <nav className="flex justify-center items-center fixed gap-[173px] right-[60px] bottom-[64px]">
      <ul className="flex justify-center items-center gap-[186px]">
        {menuItems.slice(0, 3).map(renderMenuItem)}
      </ul>
      <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
    </nav>
  );
}
