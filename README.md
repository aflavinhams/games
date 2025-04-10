# 🎮 Projeto Games

Este projeto é uma aplicação web para cadastrar, listar, editar e excluir jogos. Utiliza:

- **Frontend**: React
- **Backend**: Node.js + Express
- **Banco de Dados**: MySQL

---

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- Node.js
- MySQL
- npm (já vem com o Node)

---

## 🔧 Backend (Node.js)

1. Vá para a pasta do backend:

```bash
cd back
```

2. Instale as dependências:

```bash
npm install
```

3. Configure a conexão com o banco no arquivo `db.js`:

```js
// backend/db.js
import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "seu_usuario",
  password: "sua_senha",
  database: "jogosdb"
});
```

4. Inicie o servidor:

```bash
npm start
```

---

## 💻 Frontend (React)

1. Vá para a pasta do frontend:

```bash
cd front
```

```bash
cd reactproject
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o frontend:

```bash
npm start
```

---

## 🚀 Funcionalidades

- ✅ Cadastrar novo jogo
- ✅ Listar todos os jogos
- ✅ Editar jogo
- ✅ Excluir jogo
- ✅ Visualizar detalhes

---

## 📬 Contato

Em caso de dúvidas, sugestões ou colaborações, fique à vontade para entrar em contato. 🚀
