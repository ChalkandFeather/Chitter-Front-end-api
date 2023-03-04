/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterView = require("./chitterView");

describe("ChitterView", () => {
  /*const chitterView = new ChitterView()
  chitterView(['Chitter peep']) //These posts should be displayed on page
*/
  it("should display one peep on the page", () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new ChitterView();
    //Act
    view.displayPeeps(["This is a test peep"]);
    //Assert
    const chitterItemElements = document.querySelectorAll("div.peep-item");
    expect(chitterItemElements.length).toBe(1);
    expect(chitterItemElements[0].innerText).toBe("This is a test peep");
  });
});

/* describe("Chitter view", () => {
  it("displays 2 paragraphs", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new View();

    expect(document.querySelectorAll("p").length).toBe(2);
  });

  it("adds a new paragraph", () => {
    //arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new View();
    //act
    view.addParagraph();
    //assert
    expect(document.querySelectorAll("p").length).toBe(3);
  });

  it("clears all paragraphs in the document", () => {
    //arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new View();
    //act
    view.clearParagraphs();
    //assert
    expect(document.querySelectorAll("p").length).toBe(0);
  });
}); */
