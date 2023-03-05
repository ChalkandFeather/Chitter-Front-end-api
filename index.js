const PeepsModel = require("./peepsModel");
const ChitterView = require("./chitterView");
const ChitterClient = require("./chitterClient");

const model = new PeepsModel();
//model.addPeep("Baby Im amazed");

const client = new ChitterClient();
const view = new ChitterView(model, client);

view.displayNotesFromApi();
//view.displayPeeps(model.getPeeps());

//console.log(model.getPeeps());
//
