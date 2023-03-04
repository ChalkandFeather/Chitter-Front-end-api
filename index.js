const PeepModel = require("./peepsModel");
const ChitterView = require("./chitterView");

const model = new PeepModel();
const view = new ChitterView();

model.addPeep("Baby Im amazed");

view.displayPeeps(model.getPeeps());

//console.log(model.getPeeps());
