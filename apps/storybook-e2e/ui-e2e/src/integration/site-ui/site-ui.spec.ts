describe("site-ui: SiteUi component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=siteui--primary"));

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to SiteUi!");
  });
});
