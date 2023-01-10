const BaseDatabase = require('./base_database')
const Customer = require('../customer') 

class CustomerDatabase extends BaseDatabase{

}

module.exports = new CustomerDatabase(Customer)
