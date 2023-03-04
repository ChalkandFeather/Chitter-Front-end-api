const PeepsModel = require("./peepsModel");

describe("PeepsModel", () => {
  it("returns an empty list of peeps", () => {
    const model = new PeepsModel();

    expect(model.getPeeps()).toEqual([]);
  });

  it("adds a peep to the list of peeps", () => {
    const model = new PeepsModel();

    model.addPeep("Life goes on");

    expect(model.getPeeps()).toEqual(["Life goes on"]);
  });

  it("adds two peeps to the list of peeps", () => {
    const model = new PeepsModel();

    model.addPeep("Life goes on");
    model.addPeep("La La La how life goes on");

    expect(model.getPeeps()).toEqual([
      "Life goes on",
      "La La La how life goes on",
    ]);
  });

  it("clears list of peeps", () => {
    const model = new PeepsModel();

    model.addPeep("Life goes on");
    model.addPeep("La La La how life goes on");
    model.clear();

    expect(model.getPeeps()).toEqual([]);
  });
});
