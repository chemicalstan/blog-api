const chai = require("chai");
const chaiHttp = require("chai-http");
const truncate = require("./truncate");
const { userFactory } = require("./factories/userFactory");
const server = require("../index");
const faker = require("faker");
const { should } = chai;
chai.should();
chai.use(chaiHttp);
describe("User model", () => {
  let user;
  beforeEach(async () => {
    // Empties the test database
    await truncate();
    // creates a user
    user = await userFactory();
  });
  /**
   * GET ALL USERS
   */
  it("It should get all users", done => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("array");
        res.body[0].should.have.all.keys([
          "id",
          "name",
          "email",
          "createdAt",
          "updatedAt"
        ]);
        done();
      });
  });
  /**
   * GET USER BY ID
   */
  it("It should get a user by id", done => {
    const userId = user.id;
    chai
      .request(server)
      .get("/users/" + userId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.all.keys([
          "id",
          "name",
          "email",
          "createdAt",
          "updatedAt"
        ]);
        done();
      });
  });
  /**
   * CREATE A USER
   */
  it("It should create a users", done => {
    let _user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
    chai
      .request(server)
      .post("/users")
      .send(_user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.all.keys(["data"]);
        res.body["data"].should.be.an("object");
        res.body["data"].should.have.all.keys([
          "id",
          "name",
          "email",
          "createdAt",
          "updatedAt"
        ]);
        done();
      });
  });

  /**
   * IT SHOULD UPDATE A USER BY ID
   */
  it("it should update a user by id", done => {
    const userId = user.id;
    let _user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
    chai
      .request(server)
      .put("/users/" + userId)
      .send(_user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.all.keys(["data"]);
        res.body.data.should.be.eq(1);
        done();
      });
  });

  /**
   * IT SHOULD DELETE A USER BY ID
   */
  it('it should delete a user by id', done=>{
    const userId = user.id;
    chai.request(server)
        .delete('/users/'+userId)
        .end((err, res)=>{
          res.should.have.status(200);
          res.body.should.have.all.keys(['data']);
          res.body.data.should.be.eq(1);
          done()
        });
  })
});
