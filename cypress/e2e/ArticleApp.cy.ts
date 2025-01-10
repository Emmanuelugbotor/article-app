/// <reference types="cypress" />

describe("Article App - UI Testing with Cypress", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays loading state initially", () => {
    cy.contains("Loading...").should("be.visible");
  });
  
  it("loads and displays articles", () => {
    cy.contains("Loading...").should("be.visible");
    cy.get(".article-card").should("be.visible");
  });

  it("shows read more button on article details page when clicked", () => {
    cy.get(".article-card").first().click();
    cy.contains("Read More").should("be.visible");
  });

  it("loads articles details on click", () => {
    cy.get(".article-card").first().click();
    cy.get(".article-details").should("be.visible");
  });
});
