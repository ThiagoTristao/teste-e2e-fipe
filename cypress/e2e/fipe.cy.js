describe("test fiple table", () => {
    it("search a car price", () => {
      cy.visit("https://tabela-fipe-snowy.vercel.app/");
      cy.get('div[id="brandSelect"]').click();
      cy.get('li[id="Audi"]').click();
      cy.get('div[id="modelSelect"]').click();
      cy.get('li[id="A1 1.4 TFSI 122cv S-tronic 3p"]').click();
      cy.get('div[id="yearSelect"]').click();
      cy.get('li[id="2014 Gasolina"]').click();
      cy.get('button[id="submitButton"]').click();
      cy.get("button").should("be.visible");
    });
    it("change model and select a new year", () => {
      cy.visit("https://tabela-fipe-snowy.vercel.app/");
      cy.get('div[id="brandSelect"]').click();
      cy.get('li[id="Audi"]').click();
      cy.get('div[id="modelSelect"]').click();
      cy.get('li[id="A1 1.4 TFSI 122cv S-tronic 3p"]').click();
      cy.get('div[id="yearSelect"]').click();
      cy.get('li[id="2014 Gasolina"]').click();
      cy.get('div[id="modelSelect"]').click();
      cy.get('li[id="A3 1.6 3p Aut."]').click();
      cy.get('div[id="yearSelect"]').click();
      cy.get('li[id="2003 Gasolina"]').click();
      cy.get('button[id="submitButton"]').click();
      cy.get("button").should("be.visible");
    });
    it("error without selection", () => {
      cy.visit("https://tabela-fipe-snowy.vercel.app/");
      cy.get('button[id="submitButton"]').click();
      cy.get('p[id="brandError"]')
      cy.get('p[id="modelError"]')
      cy.get('p[id="yearError"]')
    });
  });
  