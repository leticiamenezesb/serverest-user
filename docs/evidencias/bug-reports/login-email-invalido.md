# Bug Report: Login aceita e-mail com formato inválido

## Descrição
Ao tentar realizar login com um e-mail em formato inválido (exemplo: `semarroba.com`), o sistema não exibe mensagem de erro adequada e permite a tentativa de login.

## Passos para reproduzir
1. Acessar a página de login: `https://front.serverest.dev/login`
2. Inserir um e-mail sem o caractere '@', por exemplo `semarroba.com`
3. Inserir qualquer senha válida
4. Clicar no botão "Entrar"

## Resultado esperado
O sistema deveria exibir uma mensagem de erro clara, por exemplo: "Email inválido" e impedir a tentativa de login.

## Resultado atual
O sistema permite a tentativa de login sem exibir mensagem de erro e sem impedir o envio do formulário.

## Impacto
- A experiência do usuário pode ser prejudicada por mensagens genéricas e mal posicionadas
- Testes automatizados (Cypress) não conseguem capturar essa mensagem nativa diretamente, tornando a automação menos confiável
- Pode causar inconsistência visual entre plataformas

## Evidências
![Email-invalido](imagens-bug/email-invalido.png)
![Código](imagens-bug/cy-code-email-invalido.png)

---

## Informações técnicas
- Data do teste: 14/07/2025
- Ambiente: Frontend Serverest
- Ferramenta: Cypress

---

## Recomendação de Melhoria

### Substituir a validação nativa por uma validação customizada

**Sugestões:**
- Mensagem de erro estilizada abaixo do campo
- Ícone visual e borda vermelha no input
- Texto acessível e claro para o usuário
- Validação feita por JavaScript com mensagens visíveis no DOM

**Benefícios:**
- Interface mais coerente e profissional
- Melhor experiência de uso
- Facilidade para testes automatizados com Cypress
- Controle total sobre mensagens, cores e comportamento

---

## Sugestão de correção técnica
Implementar a validação do campo de e-mail via JavaScript com feedback visual customizado. Evitar depender exclusivamente do atributo `type="email"`, permitindo assim maior controle da experiência do usuário e dos testes.