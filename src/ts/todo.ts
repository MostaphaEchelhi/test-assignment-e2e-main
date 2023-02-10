/*it("hould find the heading", () => {
  cy.visit("http://localhost:1234");

  cy.get("h2").contains("todo").should("exist");
});

it("should add todo", () => {
  cy.visit("http://localhost:1234");

  cy.get("input").type("Handla").should("have.value","handla");

  //cy.get("button").contains("skapa").click();
  cy.get("button#first").click();

  cy.get("ul > li").should("have.length",1);


});

it("should toggle todo", () => {
  cy.visit("http://localhost:1234");
  //Arrange
  cy.get("input").type("Handla").should("have.value","handla");

  //cy.get("button").contains("skapa").click();
  cy.get("button#first").click();

  cy.get("ul > li").should("have.length",1);
  //Act
  cy.get("ul > li:first").click();
  //Assert
  cy.get("ul > li:first").should("have.class", "todo_text--done");
  });

  /*beforeEach(() => {
    cy.visit("http://localhost:1234");//gör detta längst upp i filen för att slippa att skriva det i varje test
  });*/

 