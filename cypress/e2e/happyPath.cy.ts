const extractCellValues = (cells: JQuery) => {
  return cells
    .map((_, cell) => {
      return Cypress.$(cell).text().trim();
    })
    .get();
};

const isSortedArray = (values: string[]) => {
  return values.every(
    (currentValue, index, array) => !index || array[index - 1] <= currentValue,
  );
};

describe("Happy path spec", () => {
  it("a user can view details of the table row", () => {
    cy.visit("");
    cy.contains("Select a row on the left to see the details.").should(
      "be.visible",
    );
    cy.get('[role="row"][data-rowindex="0"]').click();
    cy.contains("Select a row on the left to see the details.").should(
      "not.exist",
    );
    cy.contains("Name:").should("be.visible");
  });

  it("a user can filter the results by name", () => {
    cy.visit("");
    cy.get('[role="row"]:visible').then((rows) => {
      const rowCount = rows.length;

      cy.get('[role="row"][data-rowindex="0"]')
        .find('[data-field="displayName"]')
        .invoke("text")
        .then((text) => {
          cy.get('input[type="text"]').type(text);
          cy.contains("button", "Filter").click();
          cy.get('[role="row"]:visible').should(
            "have.length.lessThan",
            rowCount,
          );
        });
    });
  });

  it("a user can filter the results by city", () => {
    cy.visit("");
    cy.get('[role="row"]:visible').then((rows) => {
      const rowCount = rows.length;

      cy.get('[role="combobox"]').click();
      cy.get('[role="option"]').eq(1).click();
      cy.contains("button", "Filter").click();
      cy.get('[role="row"]:visible').should("have.length.lessThan", rowCount);
    });
  });

  it("a user can filter the results by is active", () => {
    cy.visit("");
    cy.wait(200);
    cy.get('[role="row"]:visible').then((rows) => {
      const rowCount = rows.length;

      cy.get('input[type="checkbox"]').click();
      cy.contains("button", "Filter").click();
      cy.get('[role="row"]:visible').should("have.length.lessThan", rowCount);
    });
  });

  it("a user can turn off the columns", () => {
    cy.visit("");

    cy.get('[role="columnheader"]').contains("Name").should("exist");
    cy.get('[data-testid="MenuIcon"]').click();
    cy.get('input[type="checkbox"]').eq(1).click();
    cy.get('[role="columnheader"]').contains("Name").should("not.exist");
  });

  it("a user can sort the contacts", () => {
    cy.visit("");
    cy.wait(200);

    cy.get('[role="gridcell"][data-field="displayName"]').then(($cells) => {
      const cellValues = extractCellValues($cells);
      cy.wrap(isSortedArray(cellValues)).should("be.false");
    });
    cy.get('[role="columnheader"]').contains("Name").click();
    cy.get('[role="gridcell"][data-field="displayName"]').then(($cells) => {
      const cellValues = extractCellValues($cells);
      cy.wrap(isSortedArray(cellValues)).should("be.true");
    });
  });
});
