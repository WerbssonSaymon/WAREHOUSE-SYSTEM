import React from "react";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function headerTableWarehouse() {
  return (
    <div className="flex justify-between mb-4 items-start">
      <div className="font-medium">Almoxerifado</div>
      <Link to={"/warehouse/registration"}>
        <Button>Adicionar</Button>
      </Link>
    </div>
  );
}
