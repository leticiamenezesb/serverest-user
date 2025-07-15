# Plano de Teste - Cadastro de Usuário

## 1. Identificação

- Módulo: Autenticação de Usuário – Login
- Sistema: Serverest
- Ambiente de Teste: [https://front.serverest.dev/login](https://front.serverest.dev/login)
- Elaborado por: Letícia (QA)

---

## 2. Objetivo
Testar o fluxo de cadastro de novos usuários.

---

## 3. Escopo

### Inclui:
- Teste de cadastro com credenciais válidas
- Teste de mensagens de erro com credenciais inválidas
- Validação de campos obrigatórios
- Validação de formato de e-mail

### Não inclui:
- Login de usuário
- Testes de backend/API
- Testes de recuperação de senha

---
## 4. Critérios de Aceitação

- Cadastro com e-mail e senha válidos deve ter sucesso
- Erros devem ser exibidos para e-mails inválidos ou senhas incorretas
- Campos obrigatórios devem impedir o envio se estiverem em branco
- Formato de e-mail deve ser validado antes do envio

---

## 5. Requisitos para Execução

- Navegador Chrome ou equivalente
- Cypress instalado e configurado
- Usuário previamente cadastrado com e-mail válido
- Internet ativa

---

## 6. Ferramentas
- Cypress
- Postman
- GitHub

---



# Plano de Teste – Login 

## 1. Identificação

- Módulo: Autenticação de Usuário – Login
- Sistema: Serverest
- Ambiente de Teste: [https://front.serverest.dev/login](https://front.serverest.dev/login)
- Elaborado por: Letícia (QA)

---

## 2. Objetivo

Validar o comportamento da funcionalidade de login, garantindo que apenas usuários cadastrados possam acessar o sistema, e que entradas inválidas sejam tratadas corretamente.

---

## 3. Escopo

### Inclui:
- Teste de login com credenciais válidas
- Teste de mensagens de erro com credenciais inválidas
- Validação de campos obrigatórios
- Validação de formato de e-mail

### Não inclui:
- Cadastro de usuário
- Testes de backend/API
- Testes de recuperação de senha

---

## 4. Critérios de Aceitação

- Login com e-mail e senha válidos deve ter sucesso
- Erros devem ser exibidos para e-mails inválidos ou senhas incorretas
- Campos obrigatórios devem impedir o envio se estiverem em branco
- Formato de e-mail deve ser validado antes do envio

---

## 5. Requisitos para Execução

- Navegador Chrome ou equivalente
- Cypress instalado e configurado
- Usuário previamente cadastrado com e-mail válido
- Internet ativa

---

## 6. Ferramentas

- Cypress (automação E2E)
- GitHub (controle de versão e repositório)
- VS Code (IDE)
- Markdown (documentação dos testes)

---

## 7. Riscos

- O sistema pode não exibir mensagens de erro personalizadas, dificultando a validação automatizada
- Alterações no DOM podem quebrar seletores dos testes

---

## 8. Critério de Saída

- Todos os casos de teste executados
- Evidências de execução armazenadas
- Bugs documentados em `docs/bug-reports/`

---