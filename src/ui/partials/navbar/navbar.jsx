import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function navbar({toggleMenu}) {
  return (
    <nav className="fixed top-0 flex w-full flex-row justify-between bg-gray-700 px-4 sm:justify-between">
      <button
        onClick={toggleMenu}
        className="p-2 font-bold text-2xl text-white"
      >
        <GiHamburgerMenu/>
      </button>
      <span>
        Logo
      </span>
</nav>
  )
}
