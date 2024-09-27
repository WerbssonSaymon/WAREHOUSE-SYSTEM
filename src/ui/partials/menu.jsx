import React from "react";
import Title from "../components/title"
import MenuButton from "../components/menuButton";
import MenuFooter from "../components/menuFooter";
import { TbMessageChatbot } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { SiFramework } from "react-icons/si";

export default function menu() {
  return (
    <aside className="w-full bg-slate-700 h-[100vh] shadow-md flex flex-col justify-start">
      <Title text="Warehouse Menu" />
      <nav className={`space-y-2 `}>
        <MenuButton text="My Warehouse" route="/warehouse">
          <TbMessageChatbot />
        </MenuButton>
        <MenuButton text="My Codes">
          <FaFileCode />
        </MenuButton>
        <hr className="my-2 border-gray-500"></hr>
        <MenuButton text="My Librares">
          <IoLibraryOutline />
        </MenuButton>
        <MenuButton text="My Frameworks">
          <SiFramework />
        </MenuButton>
        <MenuFooter />
      </nav>
    </aside>
  );
}
