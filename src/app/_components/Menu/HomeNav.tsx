import { MenuItem } from "@/types/menu";

type Props = {
  menuItems: MenuItem[];
  renderMenuItem: (item: MenuItem) => React.ReactNode;
};

export default function HomeNav({ menuItems, renderMenuItem }: Props) {
  return (
    <nav className="col-start-5 col-span-6 ml-[6.3vw] flex items-end gap-[11vw] z-50">
      <ul className="flex justify-center items-end gap-[12.9vw]">
        {menuItems.slice(0, 3).map(renderMenuItem)}
      </ul>
      <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
    </nav>
  );
}
