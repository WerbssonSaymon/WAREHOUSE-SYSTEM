import React from 'react'

export default function toggleButton({children, toggleMenu}) {
  return (
    <button
          onClick={toggleMenu}
          className="p-2 font-bold text-2xl text-white top-0 right-12"
        >
          {children}
        </button>
  )
}
