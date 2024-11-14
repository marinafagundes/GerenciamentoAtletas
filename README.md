# Sportify - Rede Social para Atletas

Bem-vindo ao **Sportify**, uma plataforma de rede social criada para atletas de alto rendimento. O projeto permite que atletas, agências e patrocinadores se conectem, compartilhem suas conquistas, organizem eventos, e gerenciem suas carreiras.

Este projeto contém o frontend desenvolvido em React e um backend em Java Spring (configurado separadamente), e está estruturado para funcionar em conjunto com um banco de dados relacional.

## Índice
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Backend](#configuração-do-backend)
- [Iniciando o Projeto](#iniciando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)

---

## Pré-requisitos

Antes de começar, você precisará das seguintes ferramentas instaladas em seu sistema:
- **Node.js** e **npm**: Para verificar a instalação, execute `node -v` e `npm -v`.
- **Java** e **Spring Boot** (para o backend).
- **Oracle Database** ou outro banco de dados relacional compatível (para o backend).

> **Observação**: Este repositório contém apenas o frontend. Certifique-se de configurar o backend em um repositório separado.

---

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clone o Repositório

No terminal, clone este repositório e navegue até o diretório do projeto:

```bash
git clone https://github.com/SEU_USUARIO/sportify-frontend.git
cd sportify-frontend-react
```

### 2. Instale as Dependências
Para instalar todas as dependências listadas no package.json, execute:

```bash
npm install
```

Isso abrirá o projeto em modo de desenvolvimento em seu navegador, acessível em http://localhost:3000

### 3. Possíveis Problemas

- Erro de Conexão: Certifique-se de que o backend está rodando e acessível em http://localhost:8080.

- Porta em Uso: Se a porta 3000 já estiver em uso, execute o React em outra porta:
PORT=3001 npm start

  - No Windows, use set PORT=3001 && npm start.
 
### 4. Estrutura do Projeto

A estrutura de pastas do projeto é organizada para facilitar a manutenção e a escalabilidade.

sportify-frontend-react/
├── public/                 # Arquivos públicos, incluindo index.html e o logo
├── src/                    # Código-fonte principal
│   ├── components/         # Componentes de interface (Cadastro, Login, Consulta, Perfil)
│   ├── App.js              # Componente principal da aplicação
│   ├── App.css             # Estilos globais da aplicação
│   └── index.js            # Arquivo principal de renderização do React
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências e scripts npm
└── README.md               # Documentação do projeto

### 5. Funcionalidades Principais:

- Cadastro de Atleta: Usuários podem se cadastrar fornecendo dados como nome de usuário, nome completo, data de nascimento, esporte, gênero, e (opcionalmente) agência e equipe.

- Login: Autenticação de usuários com nome de usuário e senha.

- Consulta de Atleta por Esporte: Permite visualizar uma lista de atletas cadastrados em determinado esporte.

- Perfil do Atleta: Cada usuário pode visualizar e atualizar suas informações de perfil, incluindo agência e equipe.

### 6. Tecnologias Utilizadas

- Frontend:

  - React: Biblioteca JavaScript para construção de interfaces de usuário.
  - Axios: Biblioteca para fazer requisições HTTP para o backend.
  - CSS Modules: Estilização modular e isolada para os componentes.
  
- Backend (Separado):

  - Java e Spring Boot: Framework para construção de aplicações web em Java.
  - Banco de Dados Oracle: Sistema de banco de dados relacional para armazenar os dados dos atletas.
  - SQL Developer: Ferramenta utilizada para gerenciar o banco de dados Oracle e construir o esquema SQL.

### 7. Contribuição

Contribuições são bem-vindas! Para contribuir:

- Faça um fork deste repositório.
- Crie uma branch para sua feature ou correção (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -m 'Adiciona nova feature').
- Push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.
