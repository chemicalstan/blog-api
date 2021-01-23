const { map } = require('lodash');
const models = require('../models');

module.exports = async function truncate() {
    return await Promise.all(
        // loops through db and deletes all data
      map(Object.keys(models), (key) => {
        if (['sequelize', 'Sequelize'].includes(key)) return null;
        return models[key].destroy({ where: {}, force: true });
      })
    );
  }