require('dotenv').config();
process.env.NODE_ENV = 'test'; // set environment to test
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai');
const index = require('../index');
const db = require('../models');
const { User, sequelize } = db;
// assertion style
chai.should();

chai.use(chaiHttp);
// Mocha test description
describe('Users API', ()=>{
    beforeEach(async   (done)=>{ // Empty database before each test
        await sequelize.query('TRUNCATE table "SequelizeMeta"');
        await sequelize.drop({force: true});
        await migrate()
        done()
    })
});