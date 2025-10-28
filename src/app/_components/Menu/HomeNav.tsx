import { MenuItem } from "@/types/menu";

type Props = {
  menuItems: MenuItem[];
  renderMenuItem: (item: MenuItem) => React.ReactNode;
  onMenuClick?: () => void;
};

export default function HomeNav({
  menuItems,
  renderMenuItem,
  onMenuClick,
}: Props) {
  return (
    <nav className="col-start-6 col-span-7 z-50 max-lg:col-start-12 max-lg:col-span-1 max-lg:ml-[-3vw]">
      <ul className="max-lg:hidden flex justify-between items-end max-lg:flex-col max-lg:justify-start max-lg:items-start">
        {menuItems.map(renderMenuItem)}
      </ul>

      <div className="lg:hidden">
        <button
          className="text-primary text-base tracking-[0.05rem] leading-[0.5] block"
          onClick={onMenuClick}
        >
          MENU
        </button>
      </div>
    </nav>
  );
}
