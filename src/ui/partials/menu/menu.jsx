import React from "react";
import Title from "../../components/title";
import ToggleButton from "../../components/toggleButton";
import { GrClose } from "react-icons/gr";
import NavMenu from "./navMenu";

export default function menu({ isMenuOpen, toggleMenu }) {
  return (
    <div>
      <aside
        className={`fixed top-0 left-0 h-[100%] w-64 bg-slate-700 shadow-md flex flex-col justify-start transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Title text="Warehouse Menu" />
        <ToggleButton toggleMenu={toggleMenu}>
          <GrClose />
        </ToggleButton>
        <NavMenu />
      </aside>
    </div>
  );
}
