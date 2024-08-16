import { RiMenu2Fill } from "@remixicon/react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-50 shadow-md w-full">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-amber-800 font-dancing-script">Zad & Shie</h1>
        <button onClick={toggleSidebar} className="text-gray-800">
          <RiMenu2Fill size={30} />
        </button>
      </nav>
    </header>
  );
}
