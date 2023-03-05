const ChitterClient = require("./chitterClient");

const fetchMock = require("jest-fetch-mock");
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("ChitterClient class", () => {
  it("fetches and loads peeps data", (done) => {
    const client = new ChitterClient();

    fetchMock.mockResponseOnce(JSON.stringify({ peep: "This is a mock Peep" }));

    client.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi.peep).toBe("This is a mock Peep");
      expect(fetchMock).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
