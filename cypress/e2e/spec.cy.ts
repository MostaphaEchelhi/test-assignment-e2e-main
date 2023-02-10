import { should } from "chai";
import { sortBy, sortedIndex } from "cypress/types/lodash";
import { title } from "process";
import { movieSort } from "../../src/ts/functions";

beforeEach(() => {
  cy.visit("/");
});



it("should create movie", () => {
  cy.get("input").type("star").should("have.value", "star")
  cy.get("button#search").click();
  cy.get("div>div").should("have.length",10);

});

it("should display error if the movie dose not exist", () => {
  cy.get("input").type("asdfghj").should("have.value", "asdfghj")
  cy.get("button#search").click();
  cy.get("p").contains("Inga sökresultat att visa").should("exist")
});

it("should show error text when input field is empty", ()=> {
  cy.get("button").click();
  cy.get("p").contains("Inga sökresultat att visa").should("exist");
 });

 it("should show move in corre", () => {
  cy.get("input").type("marvel").should("have.value", "marvel")
  cy.get("button#search").click();
  cy.get("div#movie-container").contains("h3","img").should("not.exist")
 });