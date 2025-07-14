describe('Login no Serverest', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login'); // 1️⃣ Visita a página de login

    cy.get('input[data-testid="email"]').type('fulano@qa.com'); // 2️⃣ Digita o email
    cy.get('input[data-testid="senha"]').type('teste'); // 3️⃣ Digita a senha
    cy.get('button[data-testid="entrar"]').click(); // 4️⃣ Clica no botão Entrar

    // 5️⃣ Valida se foi redirecionado ou se uma mensagem aparece
    cy.url().should('include', '/admin'); // ou:
    // cy.contains('Olá').should('be.visible');
  });
});
