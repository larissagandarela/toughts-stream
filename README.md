# Thoughts

Um aplicativo para compartilhar pensamentos, permitindo aos usuários se registrar, fazer login, criar, editar e remover pensamentos.

## Descrição

O **Thoughts** é uma aplicação web que permite aos usuários compartilhar seus pensamentos. Os usuários podem se registrar, fazer login, criar novos pensamentos, visualizar seus pensamentos em um painel, editar e remover pensamentos. A aplicação utiliza autenticação para garantir que apenas usuários registrados possam acessar determinadas funcionalidades. 

## Instalação

Para instalar e configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

    ```
    git clone git@github.com:larissagandarela/toughts-stream.git
    ```

2. Instale as dependências:

    ```
    npm install
    ```

4. Configure o banco de dados:
    - Atualize o arquivo na raiz do projeto com as configurações do seu banco de dados.

5. Inicie a aplicação:

    ```
    npm start
    ```

## Uso

Aqui estão alguns exemplos de como utilizar a aplicação:

### Registro de Usuário

- Acesse `/register` para registrar um novo usuário.
- Preencha o formulário com nome, email, senha e confirmação de senha.
- Clique em "Registrar".

### Login de Usuário

- Acesse `/login` para fazer login.
- Preencha o formulário com email e senha.
- Clique em "Login".

### Criar Pensamento

- Após fazer login, acesse `/toughts/create` para criar um novo pensamento.
- Preencha o formulário com o título do pensamento.
- Clique em "Criar".

### Editar Pensamento

- Acesse `/toughts/dashboard` para visualizar seus pensamentos.
- Clique no ícone de edição ao lado do pensamento que deseja editar.
- Atualize o título do pensamento.
- Clique em "Salvar".

### Remover Pensamento

- Acesse `/toughts/dashboard` para visualizar seus pensamentos.
- Clique no ícone de remoção ao lado do pensamento que deseja remover.
- Confirme a remoção.

## Sobre o Projeto

- Este projeto foi desenvolvido como parte do curso Node.js ministrado pelo professor Matheus Battisti.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- bcryptjs
- Express-session
- connect-flash
- EJS
- MySQL
