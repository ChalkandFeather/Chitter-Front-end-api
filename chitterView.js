class ChitterView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    this.peepbuttonEl = document.querySelector("#new-peep");

    this.peepButtonEl.addEventListener("click", () => {
      const input = document.querySelector("#peep-input").value;
      this.model.addPeep(input);
      this.displaypeeps();
    });
  }

  displayPeeps() {
    document.querySelectorAll(".peep").forEach((peep) => {
      peep.remove();
    });

    const peeps = this.model.getPeeps();
    peeps.forEach((peep) => {
      const newPeepElement = document.createElement("div");
      newPeepElement.textContent = peep;
      newPeepElement.className = "peep";

      this.mainContainerEl.append(newPeepElement);
    });
  }

  displayNotesFromApi = async () => {
    await this.client.loadPeeps((data) => {
      this.model.setPeeps(data);
      this.displayPeeps();
    });
  };
}

module.exports = ChitterView;
