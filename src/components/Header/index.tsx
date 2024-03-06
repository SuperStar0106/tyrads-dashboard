import Image from "next/image";
import DarkModeSwitcher from "./DarkModeSwitcher";
import HeaderButton from "./HeaderButton";
import ButtonGroup from "./ButtonGroup";
import {
  EnvelopeOpenIcon,
  BellIcon,
  ClockIcon,
  UsersIcon,
  FolderIcon,
  Cog8ToothIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const buttons = [
    { props: { icon: <EnvelopeOpenIcon /> } },
    { props: { icon: <BellIcon /> } },
    { props: { icon: <ClockIcon /> } },
    { props: { icon: <UsersIcon /> } },
    { props: { icon: <FolderIcon /> } },
    { props: { icon: <Cog8ToothIcon /> } },
  ];
  return (
    <header className="sticky top-0 z-999 flex h-full bg-white drop-shadow-1 duration-200 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex flex-col items-center gap-3 2xsm:gap-7">
          <ul className="flex flex-col items-center gap-2 2xsm:gap-4">
            <p className="text-4xl font-bold">S.</p>
            <HeaderButton
              className="bg-amber-200"
              icon={<ChatBubbleLeftRightIcon />}
            />
          </ul>
          <ul className="flex flex-col items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <ButtonGroup buttons={buttons} />
          </ul>
          <ul className="flex flex-col items-center">
            <Image
              width={30}
              height={30}
              src={"/images/user/user-01.png"}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="User"
            />
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
