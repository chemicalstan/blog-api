const mocha = require("mocha");
const chai = require("chai");
const faker = require("faker");
const server = require("../index");
const {userFactory} = require("./factories/userFactory"),
  articleFactory = require("./factories/articleFactory"),
  truncate = require("./truncate");

chai.should();
describe("Article model", () => {
  let article;
  beforeEach(async () => {
    // Empty db
    await truncate();
    // generate default user and article
    user = await userFactory();
    article = await articleFactory();
  });
  /**
   * CREATE AN ARTICLE
   */
  it("it should create an article", done => {
    chai
      .request(server)
      .post("/articles")
      .send({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: 1
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.all.keys([
          'id', 'title', 'content', 'userId','createdAt', 'updatedAt'
        ])
        done();
      });
  });
  /**
   * GET ALL ARTICLES
   */
  it("it should get all articles", done => {
    chai
      .request(server)
      .get("/articles")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body[0].should.have.all.keys([
          'id', 'title', 'content', 'userId','createdAt', 'updatedAt'
        ])
        done();
      });
  });
  /**
   * GET ARTICLE BY ID
   */
  it("is should get article by id", done => {
    chai
      .request(server)
      .get("/articles/" + article.id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.all.keys([
          'id', 'title', 'content', 'userId','createdAt', 'updatedAt'
        ])
        done();
      });
  });
  /**
   * UPDATE ARTICLE BY ID
   */
  it("it should update article by id", done => {
    chai
      .request(server)
      .put("/articles/" + article.id)
      .send({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: 1
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.key('data');
        res.body.data.should.be.eq(1)
        done();
      });
  });
  /**
   * DELETE ARTICLE BY ID
   */
  it("it should delete article by id", done => {
    chai
      .request(server)
      .delete("/articles/" + article.id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.key('data');
        res.body.data.should.be.eq(1)
        done()
      });
  });
});
