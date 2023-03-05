class ChitterClient {
  loadPeeps(callback) {
    fetch("http://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((res) => res.json())
      .then((data) => callback(data));
  }
}

module.exports = ChitterClient;
