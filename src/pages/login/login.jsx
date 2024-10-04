import React from "react";
import { Flex, TextField, Text, Button } from "@radix-ui/themes";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { login, setLogin, senha, setSenha, enviarRequisicao } = useLogin();

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center bg-gray-100">
      <div className="lg:hidden justify-center items-center">
        <img src={"/almoxarifado.png"} width={"200px"} height={"200px"} />
      </div>

      <div className="w-[100vw] lg:w-1/3 lg:h-[100vh] bg-gray-100 flex justify-center items-center mt-10 lg:mt-0">
        <Flex direction="column" justify="center" width="300px" py="5" gap="3">
          <Text as="div" size="2" color="gray" weight="bold">
            E-mail
          </Text>
          <TextField.Root
            variant="surface"
            placeholder="Ex: cliente@servico.com"
            type="email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <Text as="div" size="2" color="gray" weight="bold">
            Senha
          </Text>
          <TextField.Root
            variant="surface"
            placeholder="12345..."
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button onClick={enviarRequisicao}>Entrar</Button>
        </Flex>
      </div>

      <div className="hidden lg:flex lg:w-2/3 h-[100vh] bg-orange-500 justify-center items-center">
        <img src={"/almoxarifado.png"} width={"400px"} height={"400px"} />
      </div>
    </div>
  );
}
