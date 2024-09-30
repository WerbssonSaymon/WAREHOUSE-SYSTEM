import React from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  TextField,
  Button,
} from "@radix-ui/themes";
import { FaCirclePlus } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePostWarehouse from "../../../hooks/usePostWarehouse";
import SelectTypeInterprise from "../../components/selectTypeInterprise";

export default function formWarehouse() {
  const {
    empresaId,
    descricao,
    tipo,
    setEmpresaId,
    setDescricao,
    setTipo,
    cadastrarAlmoxarifado,
  } = usePostWarehouse();

  const clearForm = () => {
    setEmpresaId("")
    setDescricao("")
    setTipo("")
  }

  return (
    <Container p="3" className="flex flex-col justify-center items-center">
      <Flex
        direction="row"
        justify="between"
        py="5"
        px="2"
        gap="3"
        className="bg-white"
      >
        <Text as="div" size="5" color="gray" weight="bold">
          Cadastro de almoxarifado
        </Text>

        <Link to={"/warehouse"} className="text-lg text-sky-600">
          Voltar
        </Link>
      </Flex>
      <hr></hr>
      <Flex
        direction="row"
        justify="between"
        py="5"
        px="2"
        gap="3"
        className="bg-white shadow-lg"
      >
        <Box>
          <Text as="div" size="2" color="gray" weight="bold">
            Id da empresa
          </Text>
          <TextField.Root
            variant="surface"
            type="number"
            size="3"
            value={empresaId}
            onChange={(e) => setEmpresaId(e.target.value)}
            required
          />
        </Box>
        <Box>
          <Text as="div" size="2" color="gray" weight="bold">
            Adicione uma descrição
          </Text>
          <TextField.Root
            variant="surface"
            type="text"
            size="3"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="w-96"
          />
        </Box>
        <Box>
          <Text as="div" size="2" color="gray" weight="bold">
            Tipo da empresa
          </Text>
          <SelectTypeInterprise tipo={tipo} setTipo={setTipo}/>
        </Box>
      </Flex>
      <Flex direction="row" py="3" gap="3" className="bg-white shadow-lg">
        <Box className="ml-2">
          <Button onClick={cadastrarAlmoxarifado} className="!bg-green-600 !text-white hover:!bg-green-700">
            <FaCirclePlus className="text-xl font-bold" />
            Cadastrar
          </Button>
        </Box>
        <Box>
          <Button onClick={clearForm} className="!bg-red-500 !text-white hover:!bg-red-600">
            <FaWindowClose className="text-xl font-bold" />
            Limpar
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
