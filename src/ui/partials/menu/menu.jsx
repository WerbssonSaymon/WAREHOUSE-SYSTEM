import React from "react";
import ToggleButton from "../../components/toggleButton";
import { GrClose } from "react-icons/gr";
import NavMenu from "./navMenu";
import Logo from '../../components/logo'

export default function menu({ isMenuOpen, toggleMenu }) {
  return (
    <div>
      <aside
        className={`fixed top-0 left-0 h-[100%] w-64 bg-slate-700 shadow-md flex flex-col justify-start transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       <div className="p-4 flex justify-between">
       <Logo/>
        <ToggleButton toggleMenu={toggleMenu}>
          <GrClose />
        </ToggleButton>
       </div>
        <NavMenu />
      </aside>
    </div>
  );
}
