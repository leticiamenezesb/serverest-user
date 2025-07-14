# Projeto de Automação de Testes - Cadastro de Usuário no Serverest

## 🚀 Descrição

Este projeto automatiza os testes do fluxo de cadastro de usuários no site [Serverest](https://front.serverest.dev/cadastrarusuarios) utilizando Cypress.

O objetivo é validar os principais casos de cadastro, incluindo sucesso, erros de validação e cenários negativos para garantir a qualidade da aplicação.

---

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) para automação dos testes end-to-end
- JavaScript como linguagem base para os testes
- Markdown para documentação técnica

---

## ✅ Casos de Teste Automatizados

| Caso de Teste                                         | Resultado Esperado                                  |
|-------------------------------------------------------|-----------------------------------------------------|
| Cadastro de usuário administrador com sucesso         | Usuário cadastrado com mensagem de sucesso          |
| Cadastro de usuário comum (sem marcar administrador)  | Usuário cadastrado com mensagem de sucesso          |
| Tentativa de cadastro com e-mail já existente         | Exibir mensagem de erro de e-mail duplicado         |
| Cadastro sem preencher nome                           | Exibir mensagem "Nome é obrigatório"                |
| Cadastro sem preencher e-mail                         | Exibir mensagem "Email é obrigatório"               |
| Cadastro sem preencher senha                          | Exibir mensagem "Password é obrigatório"            |
| Cadastro com todos os campos em branco                | Exibir mensagem "Nome é obrigatório"                |
| Cadastro com e-mail inválido                          | Cadastro não deve avançar, mantém usuário na página |
| Cadastro com senha muito curta                        | Exibir mensagem de senha mínima                     |

---

## 🛠️ Como Rodar os Testes

1. Clone este repositório: 


2. Instale as dependências:
´´´bash
npm install 
   
3. Execute o Cypress: 
´´´bash
npx cypress open

4. Na interface do Cypress, selecione o arquivo cadastro.cy.js para rodar os testes.


🐞 Bug Report
Durante os testes, foi identificado um bug no sistema:

O sistema aceita senhas com apenas 1 caractere, o que não atende à política mínima de segurança.

Você pode conferir o relatório detalhado no arquivo docs/bug-reports/cadastro-senha-curta.md.

🤝 Contato
Este projeto foi desenvolvido por Letícia — QA Engineer.
Para dúvidas ou sugestões, entre em contato!
