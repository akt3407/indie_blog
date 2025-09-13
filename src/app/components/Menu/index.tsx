import { menuItems } from "@/data/menuItem";
import { MenuItem } from "@/types/menu";
import Link from "next/link";

export default function Menu() {
  const renderMenuItem = (item: MenuItem) => (
    <li key={item.id}>
      <Link
        href={item.href}
        className="block text-[var(--color-primary)] text-base tracking-[0.05rem] leading-[0.5]"
      >
        {item.label}
      </Link>
    </li>
  );

  return (
    <>
      <nav className="flex justify-center items-end gap-[173px]">
        <ul className="flex justify-center items-end gap-[186px]">
          {menuItems.slice(0, 3).map(renderMenuItem)}
        </ul>
        <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
      </nav>
    </>
  );
}
