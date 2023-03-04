class PeepsModel {
  constructor() {
    this.peepsArray = [];
  }

  getPeeps() {
    return this.peepsArray;
  }

  addPeep(peep) {
    this.peepsArray.push(peep);
  }

  clear() {
    this.peepsArray = [];
  }
}

module.exports = PeepsModel;

/*
Creating Users
 * Logging in - log in
 * Posting Peeps - postPeep
 * Viewing all Peeps *(I suggest you start here) - viewAllPeeps
 * Viewing individual Peeps - viewPeep
 * Deleting Peeps - removePeep
 * Liking Peeps - likePeep
 * Unliking Peeps  - unlikePeep


model.getPeeps(); // should now return emptied []

const model = new PeepsModel();
peepsModel.js;
model.viewPeeps(); // should return [] containg all peeps

model.addPeep("I heard the news today oh boy!");
model.addPeep("Lucky man made the grade");

model.getPeeps(); // should now return ['I heard the news today oh boy!', Lucky man made the grade']

model.reset();

model.getPeeps(); // should now return emptied []
*/
