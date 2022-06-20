describe("check flow of the website", () => {
  it("check text content", () => {
    cy.visit("http://54.87.232.33/");
    cy.contains("EPICURE");
    cy.get(".hero-section").contains(
      "Epicure works with the top chef restaurants in Tel Aviv"
    );
    cy.get(".recommended-restaurant-section").contains(
      "THE POPULAR RESTAURANTS IN EPICURE:"
    );
    cy.get(".week-chef-section").get(".card");
    cy.get(".week-chef-section").get(".chef-image");
  });

  it("click on all restaurant send to restaurants page", () => {
    cy.get(".all-restaurant-link").click();
    cy.get(".filter-navbar").contains("All");
    cy.get(".filter-navbar").contains("New");
    cy.get(".filter-navbar").contains("Most Popular");
    cy.get(".filter-navbar").contains("Open");
  });

  it("click on card send us to restaurant page", () => {
    cy.get(".card:first-child").click();
    cy.get(".restaurant-page-image");
    cy.get(".restaurant-title");
  });
});
