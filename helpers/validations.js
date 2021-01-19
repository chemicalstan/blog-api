/**
 * empty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const empty = input => {
  if (input === undefined || input === "") {
    return true;
  }
};

const successMessage = { status: "success" };
const errorMessage = { status: "error" };

const status = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204
};

const trip_status = {
    active: 1.00,
    cancelled: 2.00
}

module.exports = {
    successMessage,
    errorMessage,
    status,
    trip_status,
    empty
}
