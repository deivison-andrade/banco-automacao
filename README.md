# 🧪 Automação de Testes com Cypress – Busca no Blog do Agi

# 🧪 Automação de Testes com Cypress

[![Cypress Tests](https://github.com/deivison-andrade/banco-automacao/actions/workflows/cypress.yml/badge.svg)](https://github.com/deivison-andrade/banco-automacao/actions)

Este projeto contém testes automatizados utilizando **Cypress** para validar a funcionalidade de busca no site:

👉 https://blogdoagi.com.br

---

# 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado na sua máquina:

## ✅ 1. Node.js

O Cypress roda em cima do Node.

👉 Baixe aqui: https://nodejs.org/

Após instalar, valide no terminal:

```bash
node -v
npm -v
```

Se aparecer a versão, está tudo certo ✅

---

# 📥 Clonando o projeto

No terminal, execute:

```bash
git clone git@github.com:deivison-andrade/banco-automacao.git
```

Ou via HTTPS:

```bash
git clone https://github.com/deivison-andrade/banco-automacao.git
```

Entre na pasta:

```bash
cd banco-automacao
```

---

# 📦 Instalando dependências

Execute:

```bash
npm install
```

👉 Isso vai instalar:

* Cypress
* Todas as dependências do projeto

---

# 🚀 Instalando o Cypress (caso não tenha)

Se for a primeira vez:

```bash
npx cypress install
```

---

# ▶️ Como rodar os testes

## 🧪 Modo interativo (com interface)

```bash
npx cypress open
```

👉 Vai abrir a interface do Cypress
👉 Clique no arquivo de teste (`search.cy.js`) para executar

---

## ⚡ Modo headless (terminal)

```bash
npx cypress run
```

## Modo interface grafica
```bash
npx cypress open
```

👉 Executa todos os testes automaticamente no terminal

---

# 📸 Evidências geradas

O Cypress já gera automaticamente:

## 📷 Screenshots (quando falha)

```bash
cypress/screenshots/
```

## 🎥 Vídeos da execução

```bash
cypress/videos/
```

---

# 📁 Estrutura do projeto

```bash
cypress/
 ├── e2e/
 │    └── search.cy.js        # Testes automatizados
 ├── pages/
 │    └── searchPage.js       # Page Object
 ├── screenshots/            # Prints automáticos
 ├── videos/                 # Vídeos das execuções
 └── support/                # Configurações extras
```

---

# 🧠 O que está sendo testado

Os testes cobrem:

## 🔎 Busca com termo válido

* Acessa o site
* Abre a busca
* Digita "pix"
* Valida se os resultados aparecem corretamente

## ❌ Busca com termo inválido

* Realiza busca com texto inexistente
* Valida mensagem:
  "Lamentamos, mas nada foi encontrado"

---

# 🏗️ Padrão utilizado

Foi aplicado o padrão:

👉 **Page Object Model (POM)**

Vantagens:

* Código mais organizado
* Reutilização de funções
* Manutenção facilitada

---

# ⚙️ Configurações importantes

Arquivo:

```bash
cypress.config.js
```

Contém:

* Geração de screenshots
* Gravação de vídeos
* Timeout padrão

---

# 🛠️ Possíveis problemas e soluções

## ❌ Erro: Cypress não abre

👉 Rode:

```bash
npx cypress install
```

---

## ❌ Erro de dependências

👉 Rode novamente:

```bash
npm install
```

---

## ❌ Erro de permissão (Mac/Linux)

```bash
sudo npm install
```


---

# 👨‍💻 Autor

Projeto desenvolvido por **Deivison Andrade**

---








