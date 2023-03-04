const PeepModel = require("./peepsModel");

const model = new PeepModel();
model.addPeep("Baby Im amazed");

console.log(model.getPeeps());
