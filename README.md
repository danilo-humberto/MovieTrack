# 🎬 MovieTrack

Sistema completo de Catálogo de Filmes com CRUD Fullstack desenvolvido em ReactJS + NestJS + Supabase com PostgreSQL.

![Print da tela principal do projeto](https://i.postimg.cc/k5czCtMz/Captura-de-tela-2025-07-09-090634.png)

## 📌 Sobre o Projeto

O MovieTrack permite que o usuário cadastre, visualize, edite, pesquise e exclua filmes em um catálogo visual e organizado.

Projeto desenvolvido para a avaliação da disciplina de Desenvolvimento Web, com foco em:

- Integração frontend + backend
- Validação de dados
- Boas práticas de organização de código
- Experiência de usuário com layout responsivo

---

## 🚀 Tecnologias Utilizadas

### Frontend

- ReactJS
- TypeScript
- TailwindCSS
- React Router
- Axios
- Zod (validação de formulário)
- React-query

### Backend

- NestJS
- Supabase
- PostgreSQL
- Prisma ORM
- CORS
- dotenv

---

## 🎯 Funcionalidades

### ✅ CRUD Completo de Filmes

- **📥 Criar** filme com:

  - Título
  - Descrição
  - Gênero
  - Ano de lançamento
  - Diretor
  - Duração
  - URL da imagem (pôster)
  - URL do trailer

- **📄 Listar** todos os filmes
- **🔍 Visualizar** detalhes de um filme
- **✏️ Editar** informações de um filme
- **🗑️ Deletar** filme do catálogo

### 🧠 Extras implementados

- ✔️ Validação de formulário com mensagens personalizadas
- ✔️ Layout responsivo com TailwindCSS
- ✔️ Busca por título
- ✔️ Filtro por gênero
- ✔️ Paginação
- ✔️ Visualização do trailer do filme com iframe (YouTube)
- ✔️ Mensagens de erro amigáveis ao usuário
- ✔️ Feedback de carregamento (loading spinner)

---

## 🛠️ Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/danilo-humberto/MovieTrack.git
cd MovieTrack
```

### 2. Instale as dependências

backend

```bash
cd backend/
npm install
```

frontend

```bash
cd ../frontend/
npm install
```

### 3. Configure o banco de dados

- Crie uma conta no supabase ou qualquer outro banco postgreSQL
- Configure o arquivo .env na pasta **frontend** com a URL do banco, exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/movietrack"
```

### 4. Rode as migrações e inicie o backend

```bash
cd backend/
npx prisma migrate dev
npx prisma generate
npm run start:dev
```

### 5. Inicie o frontend

```bash
cd ../frontend/
npm run dev
```

## 🧪 Rotas da API

- **_GET /movies_** -> Listar todos os filmes
- **_GET /movies/:id_** -> Detalhes de um filme
- **POST /movies** -> Criar novo filme
- **_PATCH /movies/:id_** -> Atualizar filme
- **_DELETE /movies/:id_** -> Deletar filme

## 👨‍🏫 Desenvolvido por

- Danilo Humberto
  > [LinkedIn](https://www.linkedin.com/in/danilo-humberto-28a771215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.
