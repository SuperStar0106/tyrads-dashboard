import DarkModeSwitcher from "./DarkModeSwitcher";
import ButtonGroup from "./ButtonGroup";

interface HeaderProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const buttons = [
    { props: {} },
    { props: {} },
    { props: {} },
    { props: {} },
    { props: {} },
    { props: {} },
  ];
  return (
    <header className="sticky top-0 z-999 flex h-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex flex-col items-center gap-3 2xsm:gap-7">
          <ul className="flex flex-col items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <ButtonGroup buttons={buttons} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
