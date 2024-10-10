### Logica de token com localStoage

```js
// Armazena, ler e remove o token do localStorage
const loginToken = localStorage.getItem("token");
console.log("Token armazenado no localStorage:", loginToken);

const tokens = JSON.parse(localStorage.getItem("token"));
console.log(tokens);

localStorage.removeItem('token');
```

### Console detalhado de error

```js
// Verfica de forma detalhada todos os metodos do ERROR
if (error.response) {
  console.log("Erro de resposta: ", error.response.data);
  console.log("Status do erro: ", error.response.status);
  console.log("Cabeçalhos: ", error.response.headers);
} else if (error.request) {
  console.log("Erro de requisição: ", error.request);
} else {
  console.log("Erro na configuração: ", error.message);
}
console.log("Configuração: ", error.config);
```

### Axios Interceptor

```js
// Inteceptor vai interceptar uma requisição e ser instanciado a partir do arquivo criado 
axios.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    return response;
  }, function (error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    return Promise.reject(error);
  });

```

### Tailwind CSS
```css
! - faz com que o estilo tenha prioridade em relação a outros
```

## Sintaxe, nomeclaturas e convenções 

```js
let handle = "prefixo que significa manipular"
let prev = "prefixo para valores anteriores"
let use = "para indicar um hook"
let on = "usado quando a função manipula um evento"

// Arrow function são mais comum no React e evitam problemas com THIS
const nomeDaFuncao = () => {} 
```

git commit -m "refactor:estilizando  botoes de edição e exclusão"  