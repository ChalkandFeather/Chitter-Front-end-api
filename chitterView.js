class ChitterView {
  displayPeeps(peeps) {
    peeps.forEach((peep) => {
      const newElement = document.createElement("div");
      newElement.className = "peep-item";
      newElement.innerText = peep;

      document.querySelector("#main-container").append(newElement);
    });
  }
}

module.exports = ChitterView;
/*{
  () {
    this.mainContainerEl = document.querySelector("#main-container");
constructor
    console.log(this.mainContainerEl);
  }
}

  addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "I was created dynamically by javascript";
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
  }
}*/
