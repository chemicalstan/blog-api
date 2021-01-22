const chai = require('chai');
const {assert} = chai;
const truncate = require('./truncate');
const userFactory = require('./factories/userFactory');

describe('User model', () => {
  let user;
  beforeEach(async () => {
    // Empties the test database
    await truncate();
    // creates a user
    user = await userFactory();
  });
it('should do something', async () => {
    // TODO
  });
});