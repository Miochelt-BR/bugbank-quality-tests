describe('Login BugBank - Inválido', () => {
  it('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.visit('https://bugbank.netlify.app/')

    // Preenche e-mail e senha inválidos
    cy.get('input[name="email"]').first().type('usuario_invalido@gmail.com')
    cy.get('input[name="password"]').first().type('senhaerrada')

    // Clica no botão "Acessar"
    cy.contains('button', 'Acessar').click()

    // Aguarda o modal e valida as mensagens
    cy.get('#modalText', { timeout: 8000 }).should('be.visible')
    cy.contains('Usuário ou senha inválido.').should('be.visible')
    cy.contains('Tente novamente ou verifique suas informações!').should('be.visible')
  })
})
