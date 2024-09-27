import React from "react";
import { Link } from "react-router-dom";

export default function menuButton(params) {
  return (
    <Link
      to={params.route}
      className="flex items-center p-2 text-gray-700 hover:bg-slate-800 rounded"
    >
      <span className="mr-3 text-white text-xl">
        {params.children}
      </span>
      <span className="text-white">{params.text}</span>
    </Link>
  );
}
