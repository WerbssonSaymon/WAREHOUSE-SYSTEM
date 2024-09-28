import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";
import { Section } from "@radix-ui/themes";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Navbar toggleMenu={toggleMenu} />
      <div className="w-1/6 h-[100vh] flex justify-center items-center">
        <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <Section className="bg-slate-200 w-5/6 h-[100vh] flex justify-center items-start">
        {children}
      </Section>
    </div>
  );
}
