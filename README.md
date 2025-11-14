# 🖥️ Server Status Dashboard

Um dashboard construído em **Next.js** para exibir o status de jogadores online, incluindo: ID, nome, ping e tempo online.
O objetivo do projeto é praticar **componentização**, **estilização com styled-components** e boas práticas de UI.

---

## 🚀 Tecnologias Utilizadas

* **Next.js**
* **React**
* **Styled-Components**
* **JavaScript (ES2023+)**
* **Consumo de API local**

---

## 📂 Estrutura do Projeto

```
src/
 ├── app/
 │    ├── page.jsx
 │    ├── layout.jsx
 │    └── globals.js (GlobalStyle)
 ├── components/
 │    ├── Header.jsx
 │    ├── ServerName.jsx
 │    ├── Table.jsx
 │    └── styles/
 │         ├── GlobalStyle.js
 │         └── TableStyle.js
 └── package.json
```

---

## 📌 Funcionalidades

✔️ Criado com **Next.js**
✔️ Página totalmente renderizada no cliente (`"use client"`)
✔️ Tabela dinâmica baseada na prop `onlinePlayers`
✔️ Estilização global com `createGlobalStyle`
✔️ Componentes reutilizáveis e organizados

---

## 🧩 Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o servidor Next.js

```bash
npm run dev
```

O projeto ficará disponível em:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📡 Exemplo de Estrutura de Dados Esperada

```json
[
  {
    "id": 1,
    "playerName": "Jhonatan",
    "ping": 45,
    "onlineTime": "12m"
  }
]
```

---

## 📝 Próximos Passos (Sugestões)

* Paginação
* Ordenação por nome, ping etc.
* Tema (dark/light) com `ThemeProvider`
* Testes com Jest e React Testing Library

---

## 📄 Licença

MIT License © 2025 — *Jhonatan Nascimento*

---
