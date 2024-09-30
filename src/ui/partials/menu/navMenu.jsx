import React from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { SiFramework } from "react-icons/si";
import LinkMenu from "./linkMenu";
import Signature from "../../components/signature";

export default function navMenu() {
  return (
    <nav className="space-y-2 mt-3">
      <LinkMenu text="My Warehouse" route="/warehouse">
        <TbMessageChatbot />
      </LinkMenu>
      <LinkMenu text="My Codes">
        <FaFileCode />
      </LinkMenu>
      <hr className="my-2 border-gray-500" />
      <LinkMenu text="My Libraries">
        <IoLibraryOutline />
      </LinkMenu>
      <LinkMenu text="My Frameworks">
        <SiFramework />
      </LinkMenu>
      <Signature />
    </nav>
  );
}
