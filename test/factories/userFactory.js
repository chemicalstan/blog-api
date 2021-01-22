const faker = require('faker');
const {User} = require('../../models');

/**
 * Generate an object which contains attributes needed
 * to successfully create a user instance.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}  An object to build the user from.
 */

 const data = async (props={})=>{
     const defaultProps = {
         name: faker.name.findName(),
         email: faker.internet.email()
     }
     return Object.assign({}, defaultProps, props)
 }

 /**
 * Generates a user instance from the properties provided.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       A user instance
 */

 module.exports = async (props={})=>User.create(await data(props));