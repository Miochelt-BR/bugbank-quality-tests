describe('Login BugBank', () => {

  it('Deve permitir login com e-mail e senha válidos', () => {

    // 1 Acessa o site BugBank
    cy.visit('https://bugbank.netlify.app/')

    // Preenche o campo de e-mail
    cy.get('input[name="email"]').type('thiago@example.com')

    // 3️⃣ Preenche o campo de senha
    cy.get('input[name="password"]').type('Senha@123')

    // 4️⃣ Clica no botão "Acessar"
    cy.contains('Acessar').click()

    // Valida que o login foi bem-sucedido
    cy.contains('Saldo disponível').should('be.visible')

  })
})