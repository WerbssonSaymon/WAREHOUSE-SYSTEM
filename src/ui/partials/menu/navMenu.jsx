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
      <LinkMenu text="Amoxarifado" route="/almoxarifado">
        <TbMessageChatbot />
      </LinkMenu>
      <LinkMenu text="Codigos">
        <FaFileCode />
      </LinkMenu>
      <hr className="my-2 border-gray-500" />
      <LinkMenu text="Bibliotecas">
        <IoLibraryOutline />
      </LinkMenu>
      <LinkMenu text="Ferramentas">
        <SiFramework />
      </LinkMenu>
      <Signature />
    </nav>
  );
}
