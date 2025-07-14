describe('Login no Serverest', () => {

  const baseUrl = 'https://front.serverest.dev/login';

  const preencherLogin = ({ email = '', senha = '' }) => {
    if (email) cy.get('input[data-testid="email"]').type(email);
    if (senha) cy.get('input[data-testid="password"]').type(senha);
    cy.get('button[data-testid="entrar"]').click();
  };

  it('Deve logar com usuário válido e senha correta', () => {
    cy.visit(baseUrl);

    preencherLogin({
      email: 'admin.qa@ex.com', // Use um email cadastrado válido aqui
      senha: 'teste'             // Use a senha correta para esse usuário
    });

    cy.contains('Logado com sucesso').should('be.visible'); // Ou algum texto que confirme o login
  });

});
