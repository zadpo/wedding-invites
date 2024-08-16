import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure correct import path
import Image from "next/image";
import { FAQ } from "../sidebar/faqs";
import { RegisteredGuestsList } from "../sidebar/RegisteredGuestList";
import WeddingVenueDirections from "../sidebar/WeddingVenueDirections";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[380px] rounded-tr-[30px] rounded-tl-none bg-white text-black transform px-4 py-10 shadow-lg z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-4">
          <RegisteredGuestsList />
          <FAQ />
          {/* <WeddingVenueDirections /> */}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
