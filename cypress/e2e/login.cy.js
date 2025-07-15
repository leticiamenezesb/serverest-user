describe('Login no Serverest', () => {

  const baseUrl = 'https://front.serverest.dev/login';

  const preencherLogin = ({ email = '', senha = '' }) => {
    if (email) cy.get('input[data-testid="email"]').type(email);
    if (senha) cy.get('input[data-testid="senha"]').type(senha);
    cy.get('button[data-testid="entrar"]').click();
  };

  it('Deve realizar login com sucesso', () => {
    cy.visit(baseUrl);
    preencherLogin({
      email: 'admin.qa@ex.com', // Precisa existir
      senha: 'teste'
    });
  });

  it('Deve exibir erro ao logar com senha incorreta', () => {
    cy.visit(baseUrl);
    preencherLogin({
      email: 'admin.qa@ex.com',
      senha: 'senhaErrada'
    });
    cy.contains('Email e/ou senha inválidos').should('be.visible'); // ou ajuste conforme a mensagem real
  });

  it('Deve exibir erro ao logar com email incorreto', () => {
    cy.visit(baseUrl);
    preencherLogin({
      email: 'naoexiste@qa.com',
      senha: 'teste'
    });
    cy.contains('Email e/ou senha inválidos').should('be.visible');
  });

  it('Deve impedir login com email no formato inválido (sem @) e permanecer na página', () => {
  cy.visit(baseUrl);
  preencherLogin({
    email: 'semarroba.com',
    senha: 'teste'
  });
  // Confirma que a URL não mudou (continua na página de login)
  cy.url().should('eq', baseUrl);

  // Opcional: garantir que não mostra mensagem de sucesso
  cy.contains('Login realizado com sucesso').should('not.exist');
});



  it('Deve exibir erro ao tentar logar com email em branco', () => {
    cy.visit(baseUrl);
    preencherLogin({
      email: '',
      senha: 'teste'
    });
    cy.contains('Email é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao tentar logar com senha em branco', () => {
    cy.visit(baseUrl);
    preencherLogin({
      email: 'admin.qa@ex.com',
      senha: ''
    });
    cy.contains('Password é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao tentar logar com ambos os campos em branco', () => {
    cy.visit(baseUrl);
    preencherLogin({
      email: '',
      senha: ''
    });
    cy.contains('Email é obrigatório').should('be.visible');
  });

});

