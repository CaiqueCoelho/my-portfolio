describe('My resume', () => {
    it('Should See My Resume', () => {
        cy.visit("http://localhost:3000/my-portfolio")
        cy.contains("See My Resume").should("be.visible")
    });
});