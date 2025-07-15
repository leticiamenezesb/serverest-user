
### CT01 - Cadastro de usuário administrador com sucesso (Com checkbox marcado)
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome: Admin QA
3. Informar email: admin.qa@ex.com
4. Informar senha: teste
5. Marcar "É administrador"
6. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "Cadastro realizado com sucesso"

---

### CT02 - Cadastro de usuário administrador com sucesso (sem checkbox marcado)
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome: Admin QA
3. Informar email: admin.qa@ex.com
4. Informar senha: teste
5. Marcar "É administrador"
6. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "Cadastro realizado com sucesso"

---

### CT03 - Cadastro com e-mail já existente
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome: Letícia QA
3. Informar email: admin.qa@ex.com
4. Informar senha: teste
5. Marcar "É administrador"
6. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "Este email já está sendo usado"

---

### CT04 - Cadastro sem preencher o nome
**Passos:**
1. Acessar /cadastrarusuarios
2. Deixar o campo "nome" em branco
3. Informar e-mail e senha válidos
4. Marcar "É administrador"
5. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem de erro como "Nome é obrigatório"

---

### CT05 - Cadastro sem preencher o e-mail
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome e senha válidos
3. Deixar o e-mail em branco
4. Marcar "É administrador"
5. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "email é obrigatório"

---

### CT06 - Cadastro sem preencher a senha
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome e e-mail válidos
3. Deixar a senha em branco
4. Marcar "É administrador"
5. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "password é obrigatório"

---

### CT07 - Cadastro com todos os campos em branco
**Passos:**
1. Acessar /cadastrarusuarios
2. Deixar todos os campos em branco
3. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagens de erro para cada campo obrigatório

---

### CT08 - Cadastro com e-mail inválido
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome, senha e marcar "É administrador"
3. Informar e-mail: emailsemarroba.com
4. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "email deve ser um email válido"

---

### CT09 - Cadastro com senha muito curta
**Passos:**
1. Acessar /cadastrarusuarios
2. Informar nome, e-mail válido e marcar "É administrador"
3. Informar senha: 1
4. Clicar em "Cadastrar"

**Resultado esperado:** Exibir mensagem "password deve ter no mínimo 6 caracteres"

---

# Caso de Teste: LOGIN-001

## Título
Login com credenciais válidas

## Objetivo
Validar se o sistema permite login com e-mail e senha corretos.

## Pré-condição
Usuário deve estar cadastrado previamente.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar https://front.serverest.dev/login  
2. Informar e-mail: `admin.qa@ex.com`  
3. Informar senha: `teste`  
4. Clicar no botão "Entrar"

## Resultado Esperado
- Exibir mensagem: "Login realizado com sucesso"
- Redirecionar para a rota `/usuarios`

## Pós-condição
Usuário autenticado e com sessão ativa.

