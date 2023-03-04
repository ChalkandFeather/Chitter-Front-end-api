const PeepModel = require("./peepsModel");
const ChitterView = require("./chitterView");

const model = new PeepModel();
//model.addPeep("Baby Im amazed");

console.log(model.getPeeps());

const view = new ChitterView();
//view.displayItems(["Should be seeing this"]);
