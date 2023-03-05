/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const PeepsModel = require("./peepsModel");
const ChitterView = require("./chitterView");
const ChitterClient = require("./chitterClient");

jest.mock("./chitterClient.js");

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    ChitterClient.mockClear();
  });

  it("displays multiple peeps", () => {
    module.addPeep('Baby im amazed')
    visualViewport.displayPeeps();
    newPeepElement
    };
  });
});

//Act
/* model.addPeep("This is the 1st test peep");
    view.displayPeeps(["This is the 1st test peep"]);
    //Assert
    const chitterItemElements = document.querySelectorAll("div.peep-item");
    expect(chitterItemElements.length).toBe(1);
    expect(chitterItemElements[0].innerText).toBe("This is the 1st test peep");
  });
});

describe("Chitter view", () => {
  it("clicks the peep button and displays a peep", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new ChitterView();

    const buttonEl = document.querySelector("#show-peep-button");
    const inputEl = document.querySelector("#peep-input");

    inputEl.value = "This is a test peep";

    buttonEl.click();

    expect(document.querySelector());
  });
});
*/
