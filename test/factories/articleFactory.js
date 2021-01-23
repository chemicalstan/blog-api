const faker = require('faker');
const {Article} = require('../../models');

/**
 * Generate an object which contains attributes needed
 * to successfully create a article instance.
 * 
 * @param {Object} props Properties to use for article
 * @returns {Object} an object to build an article from
 */
const data = async (props={})=>{
    const defaultProps= {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: 1
    };
    return Object.assign({}, defaultProps, props)
}
/**
 * Generates an article instance from the properties provided.
 * 
 * @param {Object} props properties to use for article
 * @returns {object} an article instance
 */
module.exports = async (props={})=>Article.create(await data(props));


