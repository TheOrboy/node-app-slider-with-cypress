describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });
});

describe("Swiper Gallery Test", function () {
  it('Checks if third slide contains "London"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "London");
  });
});

describe("Navigation in Gallery Test", function () {
  it("Allows user to navigate to the next slide", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("be.visible");
  });

  it("Allows user to navigate to the previous slide", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-button-prev").click();
    cy.get(".swiper-slide-active").should("be.visible");
  });
});

describe("Slide Descriptions Test", function () {
  it("Displays correct title and description for each slide", function () {
    cy.visit("http://localhost:3000");
    const slidesInfo = [
      { title: "London", description: "United Kingdom" },
      { title: "Rome", description: "Italy" },
      { title: "Paris", description: "France" },
    ];

    slidesInfo.forEach((slide, index) => {
      cy.get(".swiper-button-next").click();
      cy.get(".swiper-slide-active .card-description h1").should(
        "contain",
        slide.title
      );
      cy.get(".swiper-slide-active .card-description p").should(
        "contain",
        slide.description
      );
    });
  });
});

describe("Responsive Gallery Test", function () {
  const devices = ["iphone-6", "ipad-2", [1024, 768]];

  devices.forEach((device) => {
    it(`Properly adjusts on ${device} screen`, function () {
      if (Cypress._.isArray(device)) {
        cy.viewport(device[0], device[1]);
      } else {
        cy.viewport(device);
      }
      cy.visit("http://localhost:3000");
      cy.get(".swiper-container").should("be.visible");
      cy.get(".swiper-button-next").should("be.visible");
      cy.get(".swiper-button-prev").should("be.visible");
    });
  });
});

describe("Gallery Element Visibility Test", function () {
  it("Ensures all elements are visible", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper").should("be.visible");
    cy.get(".swiper-slide").should("have.length", 3);
    cy.get(".swiper-button-next").should("be.visible");
    cy.get(".swiper-button-prev").should("be.visible");
    cy.get(".swiper-pagination").should("be.visible");
  });
});
