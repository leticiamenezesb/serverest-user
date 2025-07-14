describe('Cadastro de Usuário no Serverest', () => {

  const baseUrl = 'https://front.serverest.dev/cadastrarusuarios';

  const preencherCampos = ({ nome = '', email = '', senha = '', admin = false }) => {
    if (nome) cy.get('input[data-testid="nome"]').type(nome);
    if (email) cy.get('input[data-testid="email"]').type(email);
    if (senha) cy.get('input[data-testid="password"]').type(senha);
    if (admin) cy.get('input[data-testid="checkbox"]').check();
    cy.get('button[data-testid="cadastrar"]').click();
  };

  it('Deve cadastrar um novo usuário administrador com sucesso', () => {
    const email = `admin.qa${Date.now()}@ex.com`;
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'Admin QA',
      email,
      senha: 'teste',
      admin: true
    });
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });

  it('Deve cadastrar um usuário comum (sem marcar administrador)', () => {
    const email = `comum.qa${Date.now()}@ex.com`;
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'Usuário Comum',
      email,
      senha: 'teste'
      // admin false por padrão
    });
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar um e-mail já existente', () => {
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'Admin QA',
      email: 'admin.qa@ex.com',
      senha: 'teste',
      admin: true
    });
    cy.contains('Este email já está sendo usado').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar sem preencher o nome', () => {
    const email = `semnome${Date.now()}@qa.com`;
    cy.visit(baseUrl);
    preencherCampos({
      email,
      senha: 'teste',
      admin: true
    });
    cy.contains('Nome é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar sem preencher o e-mail', () => {
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'Admin QA',
      senha: 'teste',
      admin: true
    });
    cy.contains('Email é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar sem preencher a senha', () => {
    const email = `semSenha${Date.now()}@qa.com`;
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'Admin QA',
      email,
      admin: true
    });
    cy.contains('Password é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar sem preencher nenhum campo', () => {
    cy.visit(baseUrl);
    preencherCampos({});
    cy.contains('Nome é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar com e-mail inválido', () => {
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'Admin QA',
      email: 'emailsemarroba.com',
      senha: 'teste123',
      admin: true
    });
    cy.url().should('include', 'cadastrarusuarios');
  });

  it.only('Deve exibir erro ao tentar cadastrar com senha muito curta', () => {
    const email = `curtasenha${Date.now()}@qa.com`;
    cy.visit(baseUrl);
    preencherCampos({
      nome: 'QA Ninja',
      email,
      senha: '1',
      admin: true
    });
  });
});
