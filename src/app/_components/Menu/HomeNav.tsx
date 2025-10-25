import { MenuItem } from "@/types/menu";

type Props = {
  menuItems: MenuItem[];
  renderMenuItem: (item: MenuItem) => React.ReactNode;
};

export default function HomeNav({ menuItems, renderMenuItem }: Props) {
  return (
    <nav className="col-start-6 col-span-7 z-50">
      <ul className="flex justify-between items-end">
        {menuItems.map(renderMenuItem)}
      </ul>
    </nav>
  );
}
