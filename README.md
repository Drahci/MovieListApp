# Movie List App

## Descrição

O Movie List App é uma aplicação que permite aos usuários pesquisar filmes, visualizar detalhes e salvar filmes em uma lista de favoritos. A aplicação integra-se com a API do The Movie Database (TMDb) para exibir detalhes como a nota (rating) dos filmes.

## Tecnologias Utilizadas

### Front-End
- React
- Styled Components
- Axios
- React Router
- React Modal
- Material-UI Icons

### Back-End
- Node.js (API para gerenciamento de favoritos)

## Funcionalidades

### Front-End
- Interface de pesquisa de filmes.
- Exibição de detalhes dos filmes, incluindo a nota do TMDb.
- Gerenciamento da lista de filmes favoritos (adicionar/remover).

### Back-End
- Gerenciamento de chamadas para a API do TMDb.
- Armazenamento da lista de favoritos.
- Lógica para compartilhar a lista de favoritos via link.

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- Conta no The Movie Database (TMDb) para obter uma API Key

### Passos para Executar

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/movie-list-app.git
   cd movie-list-app
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure a API Key do TMDb:
   - Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
     ```
     REACT_APP_TMDB_API_KEY=YOUR_API_KEY
     ```

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

5. Acesse a aplicação em `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
movie-list-app/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard/
│   │   │   ├── MovieCard.js
│   │   │   ├── MovieCardstyle.js
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.js
│   │   │   ├── SearchBar.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── HomeStyle.js
│   │   ├── Favorites/
│   │   │   ├── Favorites.js
│   │   │   ├── Favorites.css
│   ├── utils/
│   │   ├── rangerStar.js
│   │   ├── ServerApi.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
├── .env
├── package.json
├── README.md
```

## Deploy

A aplicação está hospedada na Vercel e pode ser acessada através do link: [Movie List App](https://movie-list-app-henna.vercel.app/)

## Testes

Para executar os testes, utilize o comando:
```sh
npm test
```
