const mocha = require("mocha");
const chai = require("chai");
const { should } = chai;
const userFactor = require("./factories/userFactory"),
  articleFactory = require("./factories/articleFactory"),
  truncate = require("./truncate");

describe("Article model", () => {
  let user, article;
  beforeEach(async () => {
    // Empty db
    await truncate();
    // generate default user and article
    // user = await userFactor();
    article = await articleFactory();
  });
  it("should do something", async () => {
    // TODO
  });
});
