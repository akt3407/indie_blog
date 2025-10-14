import { MenuItem } from "@/types/menu";

type Props = {
  menuItems: MenuItem[];
  renderMenuItem: (item: MenuItem) => React.ReactNode;
};

export default function HomeNav({ menuItems, renderMenuItem }: Props) {
  return (
    <nav className="col-start-6 col-span-7 ml-[0.97vw] flex items-end gap-[11vw]">
      <ul className="flex justify-center items-end gap-[12.9vw]">
        {menuItems.slice(0, 3).map(renderMenuItem)}
      </ul>
      <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
    </nav>
  );
}
