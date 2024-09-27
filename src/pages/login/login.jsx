import React from "react";
import { Flex, TextField, Text, Button } from "@radix-ui/themes";
import useLogin from '../../hooks/useLogin'

export default function Login() {
  
  const { login, setLogin, senha, setSenha, enviarRequisicao } = useLogin();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/3 h-[100vh] bg-gray-100 flex justify-center items-center">
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

      <div className="w-2/3 h-[100vh] bg-orange-500 flex justify-center items-center">
        <img src={"/almoxarifado.png"} width={"400px"} height={"400px"} />
      </div>
    </div>
  );
}
