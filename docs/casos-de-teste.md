
# Caso de Teste: CT-CAD-001

## Título
Cadastro com dados válidos (usuário administrador)

## Objetivo
Validar se o sistema permite cadastrar um novo usuário administrador corretamente.

## Pré-condição
Nenhum usuário existente com o mesmo e-mail.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar: https://front.serverest.dev/cadastrarusuarios  
2. Informar Nome: `Admin QA`  
3. Informar Email: `admin.qa+<timestamp>@ex.com`  
4. Informar Senha: `teste`  
5. Marcar a opção "É administrador"  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Exibir a mensagem: `"Cadastro realizado com sucesso"`
- Redirecionar para a página de login

## Pós-condição
Usuário administrador cadastrado com sucesso no sistema.


---

# Caso de Teste: CT-CAD-002

## Título
Cadastro com dados válidos (usuário comum)

## Objetivo
Verificar se o sistema permite cadastrar usuários comuns (sem privilégios de administrador).

## Pré-condição
Nenhum e-mail duplicado no sistema.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar a tela de cadastro  
2. Preencher Nome: `Usuário Comum`  
3. Preencher Email: `comum.qa+<timestamp>@ex.com`  
4. Preencher Senha: `teste`  
5. **Não marcar** o checkbox de administrador  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Exibir mensagem de sucesso
- Cadastro finalizado com redirecionamento para login

## Pós-condição
Usuário comum adicionado com sucesso.

---

# Caso de Teste: CT-CAD-003

## Título
Cadastro com e-mail já cadastrado

## Objetivo
Verificar se o sistema impede cadastro duplicado de e-mails.

## Pré-condição
E-mail `admin.qa@ex.com` já cadastrado anteriormente.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar a tela de cadastro  
2. Informar Nome: `Admin QA`  
3. Informar Email: `admin.qa@ex.com`  
4. Informar Senha: `teste`  
5. Marcar como administrador  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagem de erro: `"Este email já está sendo usado"`

## Pós-condição
Cadastro bloqueado; nenhum novo usuário criado.

---

# Caso de Teste: CT-CAD-004

## Título
Cadastro com campo de nome vazio

## Objetivo
Verificar a obrigatoriedade do campo Nome no cadastro.

## Pré-condição
Nenhuma

## Severidade
Média

## Prioridade
Alta

## Passos

1. Acessar a tela de cadastro  
2. **Deixar Nome em branco**  
3. Informar Email: `semnome+<timestamp>@qa.com`  
4. Informar Senha: `teste`  
5. Marcar como administrador  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagem: `"Nome é obrigatório"`
- Impedir envio do formulário

## Pós-condição
Cadastro não realizado.

---

# Caso de Teste: CT-CAD-005

## Título
Cadastro com campo de e-mail vazio

## Objetivo
Verificar se o sistema exige preenchimento do campo e-mail.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar o formulário  
2. Preencher Nome: `Admin QA`  
3. **Deixar e-mail em branco**  
4. Preencher Senha: `teste`  
5. Marcar como admin  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagem: `"Email é obrigatório"`

## Pós-condição
Cadastro bloqueado.

---

# Caso de Teste: CT-CAD-006

## Título
Cadastro com campo de senha vazio

## Objetivo
Verificar se o sistema exige preenchimento da senha.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar a tela de cadastro  
2. Preencher Nome: `Admin QA`  
3. Preencher Email: `semSenha+<timestamp>@qa.com`  
4. **Deixar Senha em branco**  
5. Marcar o checkbox  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagem: `"Password é obrigatório"`

## Pós-condição
Usuário não é criado.

---

# Caso de Teste: CT-CAD-007

## Título
Cadastro com todos os campos vazios

## Objetivo
Verificar se o sistema bloqueia completamente o envio com todos os campos em branco.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar o formulário  
2. **Não preencher nenhum campo**  
3. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagens: `"Nome é obrigatório"`, `"Email é obrigatório"`, `"Password é obrigatório"`

## Pós-condição
Nenhum dado enviado; validação bloqueada.

---

# Caso de Teste: CT-CAD-008

## Título
Cadastro com e-mail mal formatado

## Objetivo
Verificar se o sistema rejeita e-mails com formato inválido.

## Severidade
Média

## Prioridade
Média

## Passos

1. Acessar a tela de cadastro  
2. Preencher Nome: `Admin QA`  
3. Informar e-mail: `semarroba.com`  
4. Preencher Senha: `teste123`  
5. Marcar administrador  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagem: `"Inclua um '@' no endereço de e-mail..."` (mensagem do navegador)

## Pós-condição
Validação nativa impede o envio.

---

# Caso de Teste: CT-CAD-009

## Título
Cadastro com senha fraca (menos de 6 caracteres)

## Objetivo
Verificar se o sistema impõe limite mínimo de segurança para a senha.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar o formulário  
2. Informar Nome: `QA Ninja`  
3. Informar Email: `curtasenha+<timestamp>@qa.com`  
4. Senha: `1`  
5. Marcar admin  
6. Clicar em "Cadastrar"

## Resultado Esperado
- Mensagem: `"password deve ter no mínimo 6 caracteres"`

## Pós-condição
Cadastro rejeitado.


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

---

# Caso de Teste: CT-LOGIN-002

## Título
Login com senha incorreta

## Objetivo
Verificar se o sistema rejeita tentativas de login com senha errada.

## Pré-condição
Usuário cadastrado com e-mail válido.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar a tela de login  
2. Informar e-mail: `admin.qa@ex.com`  
3. Informar senha incorreta: `errada123`  
4. Clicar em "Entrar"

## Resultado Esperado
- Mensagem de erro: "Email e/ou senha inválidos"
- Permanece na tela de login

## Pós-condição
Usuário não autenticado.

---

# Caso de Teste: CT-LOGIN-003

## Título
Login com e-mail não cadastrado

## Objetivo
Garantir que o sistema rejeita e-mails inexistentes.

## Pré-condição
Usuário com e-mail fornecido não deve existir.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar o sistema  
2. Informar e-mail: `naoexiste@qa.com`  
3. Informar senha: `teste`  
4. Clicar em "Entrar"

## Resultado Esperado
- Mensagem: "Email e/ou senha inválidos"
- Sem acesso ao sistema

## Pós-condição
Sessão não iniciada.

---

# Caso de Teste: CT-LOGIN-004

## Título
Login com e-mail mal formatado (sem @)

## Objetivo
Verificar se o sistema valida o formato de e-mail antes de enviar.

## Pré-condição
Acesso ao sistema.

## Severidade
Média

## Prioridade
Média

## Passos

1. Acessar a tela de login  
2. Informar e-mail inválido: `semarroba.com`  
3. Informar senha: `teste`  
4. Clicar em "Entrar"

## Resultado Esperado
- Exibir erro visual no campo de e-mail (mensagem do navegador)
- Impedir envio do formulário

## Resultado Atual
- Alerta do navegador (HTML5)
- Nenhuma mensagem estilizada pelo sistema

## Pós-condição
Sem tentativa de login real.

---

# Caso de Teste: CT-LOGIN-005

## Título
Login com e-mail em branco

## Objetivo
Verificar se o sistema bloqueia o login sem preenchimento do campo e-mail.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar a tela de login  
2. Deixar o campo de e-mail vazio  
3. Informar senha: `teste`  
4. Clicar em "Entrar"

## Resultado Esperado
- Mensagem: "Email é obrigatório"
- Permanecer na tela de login

## Pós-condição
Login não executado.

---

# Caso de Teste: CT-LOGIN-006

## Título
Login com senha em branco

## Objetivo
Verificar se o sistema impede o login sem senha.

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar a tela de login  
2. Informar e-mail: `admin.qa@ex.com`  
3. Deixar o campo de senha em branco  
4. Clicar em "Entrar"

## Resultado Esperado
- Mensagem: "Password é obrigatório"
- Usuário permanece na tela de login

## Pós-condição
Sem sessão criada.

---

# Caso de Teste: CT-LOGIN-007

## Título
Login com campos e-mail e senha em branco

## Objetivo
Garantir que todos os campos obrigatórios sejam validados

## Severidade
Alta

## Prioridade
Alta

## Passos

1. Acessar o sistema  
2. Não preencher e-mail  
3. Não preencher senha  
4. Clicar em "Entrar"

## Resultado Esperado
- Mensagem: "Email é obrigatório"
- Impedir login

## Pós-condição
Login bloqueado.
