import { should } from "chai";

beforeEach(() => {
  cy.visit("/");
});


it("It should visit localhost:1234", () => {
  cy.visit("http://localhost:1234");
});

it("page should have a inputfild and a button", () => {
  cy.get("input");
  cy.get("button");
  cy.get("input").should("exist");
  cy.get("button").should("exist");
})

it("First div should have title Star Wars: Episode IV - A New Hope", ()=> {
  cy.get("input").type("star").should("have.value","star");
  cy.get("button#search").click();
  cy.get("div:first-child").should("contain.text", 'Star Wars: Episode IV - A New Hope');
})

it("last div should have title Star Trek", ()=> {
  cy.get("input").type("star").should("have.value","star");
  cy.get("button#search").click();
  cy.get("div:last").should("contain.text", 'Star Trek');
})

it("should have 10 movies", () => {
  cy.get("input").type("star").should("have.value", "star");
  cy.get("button#search").click();
  cy.get("div>div").should("have.length", 10);
});

it("should display error if the movie dose not exist", () => {
  cy.get("input").type("asdfghj").should("have.value", "asdfghj");
  cy.get("button#search").click();
  cy.get("p").contains("Inga sökresultat att visa").should("exist");
});

it("should show error text when input field is empty", () => {
  cy.get("button").click();
  cy.get("p").contains("Inga sökresultat att visa").should("exist");
});




