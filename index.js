const PeepModel = require("./peepsModel");
const ChitterView = require("./chitterView");

const model = new PeepModel();
//model.addPeep("Baby Im amazed");

console.log(model.getPeeps());

const view = new ChitterView();
view.displayPeeps(["Should be seeing this", "And this too..."]);
