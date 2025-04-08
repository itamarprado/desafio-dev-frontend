# Descrição do projeto

Este projeto consiste numa página simples de consulta de clima com base no nome da cidade inserida.

Basta realizar uma busca e selecionar uma das cidades encontradas para visualizar seus dados climáticos atuais, como temperatura atual, temperatura mínima e máxima etc.

# Stack
**Estrutura:** ReactJS com Typescript

**UI/UX:** MaterialUI, TailwindCSS e CSS

**Testes:** Jest

**Build:** Vite

# Sobre o Projeto
O projeto envolve apenas uma página, a qual está presente um componente de input, para realizar a busca da cidade inserida, e também o componente de
exibição das informações climáticas retornadas da cidade.


### APIs
Para a busca dos dados climáticos foi utilizada a API do **OpenWeatherMap - Current Weather Data**, a qual utiliza as coordenadas (latitude e longitude)
para buscar as informações climáticas da cidade.

Foi utilizada também a API do **OpenWeatherMap - Geocoding API**, para retornar as cidades que correspondem a busca, e então fornecer as coordenadas necessárias
para realizar a requisição dos dados climáticos.

### Fluxo de Execução
1. O usuário insere um nome de cidade no input de texto;
2. Enquanto digita, são realizadas requisições para o endpoint do **Geocoding API**, com a finalidade de encontrar a cidade digitada;
3. As cidades que corresponderem a busca são exibidas como opções, e caso não encontre nada, mostra uma mensagem de "Opção não encontrada";
4. Ao selecionar uma das cidades listadas, a aplicação utilizará os dados retornados do **Geocoding API** para realizar a requisição à **Current Weather Data**;
5. A requisição é enviada, e ao receber a resposta, modela as informações conforme necessário, e as exibe dentro do componente **WeatherDetails**.

# Instância do Projeto

Para realizar a instância do projeto, é necessário:

1. Clonar o repositório
2. Instalar as dependências necessárias
3. Rodar o App

**Passos:**

**Clonando o repositório**

 1. 1. Primeiro vamos abrir o CMD do Windows e navegar até a pasta de destino onde vamos clonar o repositório (utilize o comando "cd nomeDaPasta" para navegar entre as pastas pelo CMD)
    2. Após escolher a pasta desejada e navegar até a mesma, devemos executar o código Git para realizar a clonagem (caso não possua, ou não saiba como utilizar, o Git, mais informações em: https://git-scm.com). O código a ser executado é o seguinte:
      ``` 
      git clone git clone https://github.com/itamarprado/desafio-dev-frontend.git
      ```
    3. Pronto, agora basta navegar até a pasta "desafio-dev-frontend" que está situada dentro da pasta clonada, assim como no passo 1.1. (A pasta deve conter os arquivos e pastas do projeto, como as pastas src, components etc.)



**Instalando as dependências**

2. 1. Após a clonagem, já na pasta do projeto, deve-se realizar a instalação das dependências necessárias. Essa instalação é feita da seguinte maneira:
      ``` 
      npm install
      ```

   2. Ao término da instalação, podemos prosseguir para o próximo passo.
  

**Rodando a aplicação**

3. 1. Para rodar a aplicação em modo de desenvolvimento, basta rodar o código a seguir:
    ``` 
    npm run dev
    ```
   2. Por fim basta acessar a URL que será mostrada, a qual deve ser semelhante à esta:
    ```
      ➜  Local:   http://localhost:5173/
    ```

   3. Pronto, a aplicação estará rodando e você pode acessá-la.

# Dependências
## Dependências de Produção:
@emotion/react: ^11.14.0

@emotion/styled: ^11.14.0

@fontsource/montserrat: ^5.2.5

@mui/material: ^7.0.1

@tailwindcss/vite: ^4.1.3

axios: ^1.8.4

react: ^19.0.0

react-dom: ^19.0.0

tailwindcss: ^4.1.3

## Dependências de Desenvolvimento:
@eslint/js: ^9.21.0

@testing-library/jest-dom: ^6.6.3

@testing-library/react: ^16.3.0

@testing-library/user-event: ^14.6.1

@types/jest: ^29.5.14

@types/react: ^19.0.10

@types/react-dom: ^19.0.4

@vitejs/plugin-react: ^4.3.4

axios-mock-adapter: ^2.1.0

eslint: ^9.21.0

eslint-plugin-react-hooks: ^5.1.0

eslint-plugin-react-refresh: ^0.4.19

globals: ^15.15.0

jest: ^29.7.0

ts-jest: ^29.3.1

typescript: ~5.7.2

typescript-eslint: ^8.24.1

vite: ^6.2.0
