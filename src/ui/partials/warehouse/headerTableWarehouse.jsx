import React from "react";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

export default function headerTableWarehouse() {
  return (
    <div className="flex justify-between mb-4 items-start">
      <div className="font-medium">Almoxerifado</div>
      <Link to={"/almoxarifado/cadastro"}>
        <Button>
          <FaCirclePlus />
          Adicionar
        </Button>
      </Link>
    </div>
  );
}
