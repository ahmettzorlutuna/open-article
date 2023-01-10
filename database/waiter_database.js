const Waiter = require('../waiter')
const BaseDatabase = require('./base_database')

class WaiterDatabase extends BaseDatabase{

}
module.exports = new WaiterDatabase(Waiter)
