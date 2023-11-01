describe('visit home', () => {
    it('Should visit my portfolio', () => {
        cy.visit("http://localhost:3000/my-portfolio")
        cy.contains("Hi all, I'm Caíque ").should("be.visible")
    });
});