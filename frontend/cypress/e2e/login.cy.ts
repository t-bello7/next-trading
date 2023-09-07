describe('template spec', () => {
  it('passes', () => {
    cy.visit(`${process.env.NEXTAUTH_URL}`)
  })
})